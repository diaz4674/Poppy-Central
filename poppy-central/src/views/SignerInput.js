import "./OMG.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import DateToggler from "./DateToggler";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
		button: {
			margin: theme.spacing(1),
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
			maxWidth: 300,
		},
	},
}));

class SignerInput extends Component {
	state = {
		Name: "",
		Relationship: "Authorized Signer",
		Street: "",
		Position: "",
		City: "",
		MailingAddress: "",
		PrimaryIDType: "",
		Number: "",
		IssueDate1: "",
		ExpirationDate1: "",
		OtherID: "",
		OtherDesc: "",
		Expires: "",
		Employer: "",
		Title: "",
		email: "",
		WorkPhone: "",
		HomePhone: "",
		Cell: "",
		DOB: "",
		SSN: "",

		toggleCheckboxes: {
			prefix: false,
			addLine: false,
			prefixClass: "",
			addLineClass: "",
			inputBoxes: "",
		},
		loading: false,
	};

	updateCardHandler = () => {
		this.setState({
			...this.state.AccountChanges,
			loading: true,
		});
		console.log(this.state);
	};

	handleCheckboxChange = (e) => {
		this.state.toggleCheckboxes[e.target.name] = !this.state.toggleCheckboxes[
			e.target.name
		];
		let { toggleCheckboxes } = this.state;
		if (this.state.toggleCheckboxes.prefix === false) {
			this.state["PrefixName"] = "";
			let { AccountInfo } = this.state;
			this.setState({ ...this.state, AccountInfo });
		}
		this.setState({ ...this.state, toggleCheckboxes });

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
				});
			} else {
				this.setState({
					...this.state,
					toggleCheckboxes: {
						prefixClass: "",
					},
				});
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
				});
			} else {
				this.setState({
					...this.state,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						addLineClass: "",
					},
				});
			}
		}
		// console.log(this.state.toggleCheckboxes)
	};

	handleChange = (e) => {
		this.state[e.target.name] = e.target.value;
		let { AccountInfo } = this.state;
		this.setState({ AccountInfo });
	};
	render() {
		let {
			prefixClass,
			inputBoxes,
			prefix,
			addLineOption,
			addLine,
			addLineClass,
		} = this.state.toggleCheckboxes;
		const { classes } = this.props;

		return (
			<div className="container">
				<div>
					<div
						className="rows"
						style={{
							// margin: "10px 0",
							justifyContent: "space-around",
							// padding: "0 49px",
						}}
					>
						<TextField
							id="outlined-basic"
							value={this.state.Name}
							name="Name"
							onChange={this.handleChange}
							label="Full Name"
							variant="outlined"
							className="twoRows"
						/>
						<TextField
							id="outlined-basic"
							value={this.state.DOB}
							name="DOB"
							onChange={this.handleChange}
							label="Date of Birth"
							variant="outlined"
							className="twoRows"
						/>
						<TextField
							id="outlined-basic"
							value={this.state.email}
							name="email"
							onChange={this.handleChange}
							label="Email"
							variant="outlined"
							className="twoRows"
						/>
						<TextField
							id="outlined-basic"
							value={this.state.DOB}
							name="DOB"
							onChange={this.handleChange}
							label="Date of Birth"
							variant="outlined"
							className="twoRows"
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
						<FormControl
							className={classes.formControl}
							row
							style={{ width: "263px", padding: "15px 23px 0" }}
						>
							<InputLabel id="demo-simple-select-label">
								Primary ID Type
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								name="PrimaryIDType"
								value={this.state.PrimaryIDType}
								onChange={this.handleChange}
								style={{ width: "150px", marginLeft: "0" }}
								className={`prefixClas`}
							>
								<MenuItem value={"CADL"}>Drivers License</MenuItem>
								<MenuItem value={"Passport"}>Passport</MenuItem>
								<MenuItem value={"CAID"}>State ID</MenuItem>
							</Select>
						</FormControl>
						<TextField
							id="outlined-basic"
							label="Number"
							name={"Number"}
							value={this.state.Number}
							onChange={this.handleChange}
							multiline
							variant="outlined"
							className="IDType"
							label="ID Number"
							style={{ padding: "10px 0" }}
						/>
						<DateToggler titleName="Issue Date" FishUp={() => DateToggler()} />
						<DateToggler
							titleName="Expiration Date"
							FishUp={() => DateToggler()}
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
						<FormControl
							className={classes.formControl}
							row
							style={{ width: "263px", padding: "15px 23px 0" }}
						>
							<InputLabel id="demo-simple-select-label">
								Secondary ID Type
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								name="OtherID"
								value={this.state.OtherID}
								onChange={this.handleChange}
								style={{ width: "150px", marginLeft: "0" }}
								className={`prefixClas`}
							>
								<MenuItem value={"Credit Card"}>Credit Card</MenuItem>
								<MenuItem value={"Passport"}>Passport</MenuItem>
								<MenuItem value={"CAID"}>State ID</MenuItem>
							</Select>
						</FormControl>
						<TextField
							id="outlined-basic"
							label="OtherDesc"
							name={"OtherDesc"}
							value={this.state.OtherDesc}
							onChange={this.handleChange}
							multiline
							variant="outlined"
							className="IDType"
							label="Description"
							style={{ padding: "10px 0" }}
							placeholder="Visa, Mastercard"
						/>
						<DateToggler
							titleName="Expiration Date"
							FishUp={() => DateToggler()}
						/>
						<TextField
							id="outlined-basic"
							name="SSN"
							value={this.state.SSN}
							onChange={this.handleChange}
							label="SSN"
							variant="outlined"
							style={{ width: "41%" }}
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
							label="Employer"
							name={"Employer"}
							value={this.state.Employer}
							onChange={this.handleChange}
							multiline
							variant="outlined"
							className="twoRows"
						/>
						<TextField
							id="outlined-basic"
							label="Occupation"
							name={"Title"}
							placeholder="CEO/Customer Service"
							value={this.state.Title}
							onChange={this.handleChange}
							variant="outlined"
							className="twoRows"
						/>
						<TextField
							id="outlined-basic"
							label="Street"
							multiline
							name="Street"
							value={this.state.Street}
							onChange={this.handleChange}
							placeholder="123 Happy St."
							variant="outlined"
							className="twoRows"
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
							className="twoRows"
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
							label="Home Phone"
							name={"HomePhone"}
							value={this.state.HomePhone}
							onChange={this.handleChange}
							multiline
							variant="outlined"
							className="twoRows"
						/>
						<TextField
							id="outlined-basic"
							label="Work Phone"
							name={"WorkPhone"}
							value={this.state.WorkPhone}
							onChange={this.handleChange}
							variant="outlined"
							className="twoRows"
						/>
						<TextField
							id="outlined-basic"
							label="Cell"
							multiline
							name="Cell"
							value={this.state.Cell}
							onChange={this.handleChange}
							variant="outlined"
							className="twoRows"
						/>
					</div>
				</div>
			</div>
		);
	}
}

SignerInput.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SignerInput);
