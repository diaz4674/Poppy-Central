import "./BusinessForm.css"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import React, { Component } from "react"
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import download from "downloadjs"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
		button: {
			margin: theme.spacing(1),
		},
	},
}))

class BusinessForm extends Component {
	state = {
		AccountInfo: {
			Type: "Business",
			Ownership: "CCorp",
			Benificiary: "",
			BeneficiaryDetails: "",
			totalSigners: 3,
			BusinessName: "Netlix",
			Prefix: "",
			PrefixName: "Hulu",
			AnotherName: "",
			Street: "123 Main St",
			City: "Santa Rosa, CA 94949",
			EIN: "12-345676",
			AccountType1: "Business Checking",
			AccountNumber1: "01-1000088-8",
		},
		toggleCheckboxes: {
			prefix: false,
			addLine: false,
			prefixClass: "",
			addLineClass: "",
			inputBoxes: "",
		},
		loading: false,
	}

	updateCardHandler = () => {
		this.setState({
			...this.state,
			loading: true,
		})
		axios
			.post(
				// "https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/",
				"http://127.0.0.1:5000/signatureCard",
				this.state.AccountInfo,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(res.data, "Sig Card", res.content)

				console.log(res)
				return res
			})
			.catch((error) => console.log(error))
		axios
			.post(
				// "https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/",
				"http://127.0.0.1:5000/resolution",
				this.state.AccountInfo,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(res.data, "Resolution", res.content)
				this.setState({ ...this.state, loading: false })
				console.log(res)
				return res
			})
			.catch(
				(error) => (
					alert(
						"Oops! Something funny hBusinessFormened. Try again or contact the admin."
					),
					this.setState({ ...this.state, loading: false })
				)
			)
		this.setState({
			...this.state,
			loading: true,
		})
	}
	handleCheckboxChange = (e) => {
		this.state.toggleCheckboxes[e.target.name] = !this.state.toggleCheckboxes[
			e.target.name
		]
		let { toggleCheckboxes } = this.state

		this.setState({ toggleCheckboxes })
		console.log(toggleCheckboxes)
		if (e.target.name === "prefix") {
			if (toggleCheckboxes.prefix) {
				this.setState({
					// ...this.state.toggleCheckboxes,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						prefixClass: "prefix",
						inputBoxes: "inputBoxes",
						addLineOption: "addLineOption",
					},
				})
			} else {
				this.setState({
					// ...this.state.toggleCheckboxes,
					toggleCheckboxes: {
						prefixClass: "",
					},
				})
			}
		} else {
			if (toggleCheckboxes.addLine) {
				this.setState({
					// ...this.state.toggleCheckboxes,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						addLineClass: "addLineClass",
						inputBoxes: "inputBoxes",
					},
				})
			} else {
				this.setState({
					// ...this.state.toggleCheckboxes,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						addLineClass: "",
					},
				})
			}
		}
		// console.log(this.state.toggleCheckboxes)
	}

	handleChange = (e) => {
		// let stateName = e.target.name
		// console.log(stateName)
		// JSON.stringify(stateName)

		this.state.AccountInfo[e.target.name] = e.target.value
		let { AccountInfo } = this.state
		this.setState({ AccountInfo })
	}
	render() {
		let {
			prefixClass,
			inputBoxes,
			prefix,
			addLineOption,
			addLine,
			addLineClass,
		} = this.state.toggleCheckboxes
		return (
			<div className="container">
				<div>
					<TextField
						id="outlined-basic"
						value={this.state.BusinessName}
						name="BusinessName"
						onChange={this.handleChange}
						label="Business Name"
						variant="outlined"
						className="inputBoxes"
					/>
					{/* Prefix Check  */}
					<FormGroup
						aria-label="position"
						className="checkBoxDiv"
						row
						style={{ padding: "0 35px" }}
					>
						<FormControlLabel
							value={prefix}
							control={<Checkbox />}
							style={{ color: "grey" }}
							label="Prefix"
							name="prefix"
							onChange={this.handleCheckboxChange}
							labelPlacement="start"
							className="checkBox"
						/>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							name="Prefix"
							value={this.state.Prefix}
							onChange={this.handleChange}
							style={{ width: "150px", marginLeft: "25px" }}
							className={`noShow ${prefixClass}`}
						>
							<MenuItem value={"DBA"}>DBA</MenuItem>
							<MenuItem value={"FBO"}>FBO</MenuItem>
						</Select>
					</FormGroup>

					<TextField
						id="outlined-basic"
						label="Prefix Name"
						name="PrefixName"
						value={this.state.PrefixName}
						onChange={this.handleChange}
						variant="outlined"
						className={`noShow ${prefixClass} ${inputBoxes}`}
					/>
					<FormGroup
						aria-label="position"
						className="checkBoxDiv"
						row
						style={{
							display: "flex",
							justifyContent: "flex-start",
							padding: "0 35px",
						}}
					>
						<FormControlLabel
							value={addLine}
							control={<Checkbox />}
							name="addLine"
							style={{ color: "grey" }}
							onChange={this.handleCheckboxChange}
							label="Add Line"
							labelPlacement="start"
							row
							className={`noShow ${addLineOption}`}
						/>
						<TextField
							id="outlined-basic"
							label="Add Another Name"
							name="AnotherName"
							value={this.state.AnotherName}
							onChange={this.handleChange}
							style={{ width: "280px", paddingLeft: "18px !important" }}
							variant="outlined"
							className={`noShow ${addLineClass} ${inputBoxes}`}
						/>
					</FormGroup>
					<TextField
						id="outlined-basic"
						name="EIN"
						value={this.state.EIN}
						onChange={this.handleChange}
						label="EIN"
						variant="outlined"
						className="inputBoxes"
					/>
					<TextField
						id="outlined-basic"
						label="Account Number"
						name={"AccountNumber1"}
						value={this.state.AccountType1}
						onChange={this.handleChange}
						multiline
						variant="outlined"
						className="inputBoxes"
					/>
					<TextField
						id="outlined-basic"
						label="Account Type"
						name={"AccountType1"}
						placeholder="Business Checking"
						value={this.state.AccountType1}
						onChange={this.handleChange}
						variant="outlined"
						className="inputBoxes"
					/>
					<TextField
						id="outlined-basic"
						label="Street"
						multiline
						name="Street"
						value={this.state.Street}
						onChange={this.handleChange}
						placeholder="123 HBusinessFormy St."
						variant="outlined"
						className="inputBoxes"
					/>
					<TextField
						id="outlined-basic"
						label="City"
						name="City"
						value={this.state.City}
						onChange={this.handleChange}
						multiline
						placeholder="Santa Rosa, CA 94949"
						variant="outlined"
						className="inputBoxes"
					/>
				</div>
				{/* <button onClick={this.updateCardHandler}>Change Sigs</button> */}
				<div className="buttonContainer">
					<Button
						variant="contained"
						color="default"
						onClick={this.updateCardHandler}
						className="submitButton"
					>
						{this.state.loading ? (
							<div class="load-3">
								<div class="line"></div>
								<div class="line"></div>
								<div class="line"></div>
							</div>
						) : (
							"Generate Docs"
						)}
					</Button>
				</div>
			</div>
		)
	}
}

BusinessForm.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(BusinessForm)
