import "../../global.css"
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
import InputLabel from "@material-ui/core/InputLabel"

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

class BusinesInputs extends Component {
	state = {
		AccountChanges: [
			{
				Type: "Business",
				Ownership: "LLC",
				Benificiary: "",
				BeneficiaryDetails: "",
				totalSigners: 3,
				BusinessName: "Example LLC",
				Prefix: "",
				PrefixName: "",
				PrefixEIN: "",
				AnotherName: "",
				Street: "123 Industrial St",
				City: "San Francisco CA 94016",
				EIN: "12-345677",
				AccountType1: "Business Checking",
				AccountNumber1: "01-100038-9",
			},
		],

		toggleCheckboxes: {
			prefix: false,
			addLine: false,
			prefixClass: "",
			addLineClass: "",
			inputBoxes: "",
		},
		loading: false,
	}

	async componentDidMount() {
		console.log(this.props.businessEdit)

		if ((await this.props.businessEdit) === undefined) {
			console.log("nothing here")
		} else {
			let { savedProject } = this.props.businessEdit
			console.log(this.props.businessEdit.businessInfo)
			this.setState({
				...this.state,
				AccountChanges: this.props.businessEdit.businessInfo,
			})
			console.log("theres stuff")
		}
	}

	updateCardHandler = () => {
		this.setState({
			...this.state.AccountChanges,
			loading: true,
		})
		console.log(this.state.AccountChanges)
		axios
			.post(
				// "https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/",
				"http://127.0.0.1:5000/signatureCard",
				this.state.AccountChanges,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(
					res.data,
					`${this.state.AccountChanges[0].BusinessName} - Sig Card`,
					res.content
				)

				console.log(res)
				return res
			})
			.catch((error) => console.log(error))
		axios
			.post(
				// "https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/",
				"http://127.0.0.1:5000/resolution",
				this.state.AccountChanges,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(
					res.data,
					`${this.state.AccountChanges[0].BusinessName} - Resolution`,
					res.content
				)
				this.setState({ ...this.state, loading: false })
				console.log(res)
				return res
			})
			.catch(
				(error) => (
					alert(
						"Oops! Something funny happened. Try again or contact the admin."
					),
					this.setState({ ...this.state, loading: false })
				)
			)
		this.setState({
			...this.state,
			loading: false,
		})
	}
	handleCheckboxChange = (e) => {
		this.state.toggleCheckboxes[e.target.name] = !this.state.toggleCheckboxes[
			e.target.name
		]
		let { toggleCheckboxes } = this.state
		if (this.state.toggleCheckboxes.prefix === false) {
			this.state.AccountChanges[0]["PrefixName"] = ""
			let { AccountInfo } = this.state.AccountChanges[0]
			this.setState({ ...this.state, AccountInfo })
		}
		this.setState({ ...this.state, toggleCheckboxes })

		if (e.target.name === "prefix") {
			if (toggleCheckboxes.prefix) {
				this.setState({
					...this.state,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						prefixClass: "prefix",
						inputBoxes: "inputBoxes",
						addLineOption: "addLineOption",
					},
				})
			} else {
				this.setState({
					...this.state,
					toggleCheckboxes: {
						prefixClass: "",
					},
				})
			}
		} else {
			if (toggleCheckboxes.addLine) {
				this.setState({
					...this.state,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						addLineClass: "addLineClass",
						inputBoxes: "inputBoxes",
					},
				})
			} else {
				this.setState({
					...this.state,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						addLineClass: "",
					},
				})
			}
		}
	}

	handleChange = (e) => {
		this.state.AccountChanges[0][e.target.name] = e.target.value
		let { AccountInfo } = this.state.AccountChanges[0]
		this.setState({ AccountInfo })
	}

	stateDone = () => {
		// closes panel
		this.props.onChange()
		// passes state object up
		this.props.updateSignersFunc(this.state.AccountChanges)
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

		const { classes } = this.props

		return (
			<div className="container" style={{ margin: "0 0 15px" }}>
				<div
					className="rows"
					style={{
						margin: "10px 0",
						justifyContent: "center",
						padding: "0 20px",
					}}
				>
					<FormGroup
						className={classes.formControl}
						row
						style={{ width: "263px", padding: "15px 23px 0" }}
					>
						<InputLabel id="demo-simple-select-label">
							Ownership Type
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							name="Ownership"
							value={this.state.AccountChanges[0].Ownership}
							onChange={this.handleChange}
							style={{ width: "150px", marginLeft: "25px" }}
							className={`prefixClass`}
						>
							<MenuItem value={"Sole Prop"}>Sole Prop</MenuItem>
							<MenuItem value={"LLC"}>LLC</MenuItem>
							<MenuItem value={"SCorp"}>SCorp</MenuItem>
							<MenuItem value={"CCorp"}>CCorp</MenuItem>
						</Select>
					</FormGroup>
					<TextField
						id="outlined-basic"
						value={this.state.AccountChanges[0].BusinessName}
						name="BusinessName"
						onChange={this.handleChange}
						label="Business Name"
						variant="outlined"
						style={{ width: "216px" }}
					/>
					{/* Prefix Check  */}
					<FormGroup
						aria-label="position"
						className="checkBoxDiv"
						row
						// style={{ padding: "0 61px !important" }}
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
							value={this.state.AccountChanges[0].Prefix}
							onChange={this.handleChange}
							style={{ width: "150px" }}
							className={`noShow ${prefixClass}`}
						>
							<MenuItem value={"DBA"}>DBA</MenuItem>
							<MenuItem value={"FBO"}>FBO</MenuItem>
						</Select>
						<TextField
							id="outlined-basic"
							label="Prefix EIN"
							name="PrefixEIN"
							value={this.state.AccountChanges[0].PrefixEIN}
							onChange={this.handleChange}
							variant="outlined"
							className={`noShow ${prefixClass} ${inputBoxes}`}
							style={{ width: "200px", marginRight: "35px" }}
						/>
					</FormGroup>
				</div>

				<div
					className="rows"
					style={{
						margin: "10px 0",
						justifyContent: "center",
						padding: "0 20px",
					}}
				>
					<TextField
						id="outlined-basic"
						label="Prefix Name"
						name="PrefixName"
						value={this.state.AccountChanges[0].PrefixName}
						onChange={this.handleChange}
						variant="outlined"
						className={`noShow ${prefixClass} ${inputBoxes}`}
						style={{ width: "250px" }}
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
							value={this.state.AccountChanges[0].AnotherName}
							onChange={this.handleChange}
							style={{ width: "280px", paddingLeft: "18px !important" }}
							variant="outlined"
							className={`noShow ${addLineClass} ${inputBoxes}`}
						/>
					</FormGroup>
				</div>

				<div
					className="rows"
					style={{
						margin: "10px 0",
						justifyContent: "space-around",
						padding: "0 20px",
					}}
				>
					<TextField
						id="outlined-basic"
						name="EIN"
						value={this.state.AccountChanges[0].EIN}
						onChange={this.handleChange}
						label="EIN"
						variant="outlined"
						className="inputBoxes"
						style={{ width: "200px" }}
					/>
					<TextField
						id="outlined-basic"
						label="Account Number"
						name={"AccountNumber1"}
						value={this.state.AccountChanges[0].AccountNumber1}
						onChange={this.handleChange}
						multiline
						variant="outlined"
						className="inputBoxes"
						style={{ width: "200px" }}
					/>
					<TextField
						id="outlined-basic"
						label="Account Type"
						name={"AccountType1"}
						placeholder="Business Checking"
						value={this.state.AccountChanges[0].AccountType1}
						onChange={this.handleChange}
						variant="outlined"
						className="inputBoxes"
						style={{ width: "200px" }}
					/>
				</div>
				<div
					className="rows"
					style={{
						margin: "10px 0",
						justifyContent: "space-around",
						padding: "0 20px",
					}}
				>
					<TextField
						id="outlined-basic"
						label="Street"
						multiline
						name="Street"
						value={this.state.AccountChanges[0].Street}
						onChange={this.handleChange}
						placeholder="123 Happy St."
						variant="outlined"
						className="inputBoxes"
					/>
					<TextField
						id="outlined-basic"
						label="City, State, Zip Code"
						name="City"
						value={this.state.AccountChanges[0].City}
						onChange={this.handleChange}
						multiline
						placeholder="Santa Rosa, CA 94949"
						variant="outlined"
						className="inputBoxes"
					/>
				</div>
				<Button
					style={{
						margin: "25px 0",
					}}
					variant="contained"
					onClick={this.stateDone}
					color="primary"
				>
					All Set!
				</Button>
			</div>
		)
	}
}

BusinesInputs.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(BusinesInputs)
