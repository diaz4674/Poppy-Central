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
		signer1: {},
	})

	useEffect(async () => {
		totalSigners = props.AccountInfo.Signers.length
		await setValues({ numSigners: props.AccountInfo.Signers.length })
	}, [])
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	const updateCardHandler = () => {
		// setLoading(true);
		console.log(allValue)
	}
	const updateSigners = async (e) => {
		await setValues({
			...allValue,
			numSigners: props.AccountInfo.Signers.length,
		})
	}
	return (
		<div className={classes.root}>
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
				</AccordionSummary>
				<BusinesInputs />
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
						{allValue.signer1 ? (
							<img
								src={checkmark}
								alt="checkmark"
								style={{ width: "25px", margin: "0 15px" }}
							/>
						) : (
							<img
								src={error}
								alt="checkmark"
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
		</div>
	)
}
