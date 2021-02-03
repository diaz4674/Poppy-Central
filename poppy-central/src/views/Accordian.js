import React, { useEffect, useMemo } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import BusinesInputs from "./BusinessInputs"
import SignerInput from "./SignerInput"
import Button from "@material-ui/core/Button"
import checkmark from "./check.svg"
import error from "./close.svg"
import axios from "axios"
import download from "downloadjs"

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0,
	},
	header1: {},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
}))

let totalSigners

export default function ControlledAccordions(props) {
	const classes = useStyles()
	const [expanded, setExpanded] = React.useState("panel1")
	const [loading, setLoading] = React.useState(false)
	const [allValue, setValues] = React.useState({
		numSigners: "",
		accountState: null,
		totalSigners,
	})

	useEffect(async () => {
		totalSigners = props.AccountInfo.Signers.length
		await setValues({
			...allValue,
			totalSigners: props.AccountInfo.Signers.length,
			numSigners: props.AccountInfo.Signers.length,
		})
	}, [])
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	const updateCardHandler = async () => {
		let payload = {
			AccountInfo: allValue.AccountInfo,
			totalSigners: allValue.totalSigners,
		}

		for (let i = 1; i < totalSigners + 1; i++) {
			if (allValue[`signer${+i}`] === undefined) {
				return alert("Sorry looks like your still missing some info")
			}
			payload[`signer${+i}`] = allValue[`signer${+i}`]
		}
		console.log(payload)
		await axios
			.post(
				// "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/",
				"http://127.0.0.1:5000/signatureCard",
				payload,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(
					res.data,
					`${payload.AccountInfo.BusinessName} - Sig Card`,
					res.content
				)

				console.log(res)
				return res
			})
			.catch((error) => console.log(error))
		await axios
			.post(
				// "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/resolution",
				"http://127.0.0.1:5000/resolution",
				payload,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(
					res.data,
					`${payload.AccountInfo.BusinessName} - Resolution`,
					res.content
				)
				console.log(res)
				return res
			})
			.catch((error) =>
				alert("Oops! Something funny happened. Try again or contact the admin.")
			)
	}

	const updateSigners = async (e) => {
		if (e.signerNumber !== undefined) {
			await setValues((prevState) => ({
				...prevState,
				[e.signerNumber]: e,
			}))
		} else {
			await setValues((prevState) => ({
				...prevState,
				AccountInfo: e[0],
			}))
		}
	}
	return (
		<div className={classes.root}>
			{allValue.numSigners === "" ? (
				<p>loading</p>
			) : (
				<>
					<Accordion
						expanded={expanded === "panel1"}
						onChange={handleChange("panel1")}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							<Typography className={classes.header1}>
								Business Information
							</Typography>
							{"AccountInfo" in allValue ? (
								<img
									src={checkmark}
									alt="checkmark"
									style={{ width: "25px", margin: "0 15px" }}
								/>
							) : (
								<img
									src={error}
									alt="error"
									style={{ width: "25px", margin: "0 15px" }}
								/>
							)}
						</AccordionSummary>
						<BusinesInputs
							updateSignersFunc={updateSigners}
							onChange={handleChange(`panel1bh-header`)}
						/>
					</Accordion>
					{Array.from(Array(totalSigners)).map((x, index) => (
						<Accordion
							key={index}
							expanded={expanded === `panel${index + 2}`}
							onChange={handleChange(`panel${index + 2}`)}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`panel${index + 2}bh-content`}
								id={`panel${index + 2}bh-header`}
							>
								<Typography>Signer {index + 1}</Typography>
								{"signer" + (index + 1) in allValue ? (
									<img
										src={checkmark}
										alt="checkmark"
										style={{ width: "25px", margin: "0 15px" }}
									/>
								) : (
									<img
										src={error}
										alt="error"
										style={{ width: "25px", margin: "0 15px" }}
									/>
								)}
							</AccordionSummary>

							<SignerInput
								updateSignersFunc={updateSigners}
								signerNumber={"signer" + (index + 1)}
								onChange={handleChange(`panel${index + 2}`)}
							/>
						</Accordion>
					))}
					<div className="buttonContainer">
						<Button
							variant="contained"
							color="default"
							onClick={updateCardHandler}
							className="submitButton"
						>
							{loading ? (
								<div class="load-3">
									<div class="line"></div>
									<div class="line"></div>
									<div class="line"></div>
								</div>
							) : (
								"Save Project"
							)}
						</Button>
					</div>
				</>
			)}
		</div>
	)
}
