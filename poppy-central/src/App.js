import logo from "./logo-mobile.svg";
import "./App.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import download from "downloadjs";

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
}));

		// AccountInfo: {
		// 	Type: "Business",
		// 	Ownership: "CCorp",
		// 	Benificiary: "",
		// 	BeneficiaryDetails: "",
		// 	totalSigners: 3,
		// 	BusinessName: "",
		// 	Prefix: "",
		// 	PrefixName: "",
		// 	AnotherName: "Welltower Redmond",
		// 	Street: "",
		// 	City: "",
		// 	EIN: "",
		// 	AccountType1: "",
		// 	AccountNumber1: "",
		// },

class App extends Component {
	state = {
		AccountInfo: {
			Type: "Business",
			Ownership: "CCorp",
			Benificiary: "",
			BeneficiaryDetails: "",
			totalSigners: 3,
			BusinessName: "Netlix",
			Prefix: "DBA",
			PrefixName: "Hulu",
			AnotherName: "",
			Street: "123 Main St",
			City: "Santa Rosa, CA 94949",
			EIN: "12-345676",
			AccountType1: "Business Checking",
			AccountNumber1: "01-1000088-8",
		},
	};

	updateCardHandler = () => {
		console.log(this.state)
		axios
			.post(
				// "https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/",
				"http://127.0.0.1:5000/",
				this.state.AccountInfo,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(res.data, "Sig Card", res.content);

				console.log(res);
				return res;
			})
			.catch((error) => console.log(error));
		axios
			.post(
				// "https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/",
				"http://127.0.0.1:5000/resolution",
				this.state.AccountInfo,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(res.data, "Resolution", res.content);

				console.log(res);
				return res;
			})
			.catch((error) => console.log(error));
		console.log("hi");
	};

	handleChange = (e) => {
		// let stateName = e.target.name
		// console.log(stateName)
		// JSON.stringify(stateName)

		this.state.AccountInfo[e.target.name] = e.target.value;
		let {AccountInfo} = this.state
		console.log(this.state)
		this.setState({ AccountInfo });
		console.log(this.state);
	};
	render() {
		return (
			<div className="InputBox">
				<img src={logo} className="logo" />
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
					<TextField
						id="outlined-basic"
						label="Prefix"
						name="Prefix"
						value={this.state.Prefix}
						onChange={this.handleChange}
						variant="outlined"
						className="inputBoxes"
					/>
					<TextField
						id="outlined-basic"
						label="PrefixName"
						name="PrefixName"
						value={this.state.PrefixName}
						onChange={this.handleChange}
						variant="outlined"
						className="inputBoxes"
					/>
					<TextField
						id="outlined-basic"
						label="Add Another Name"
						name="AnotherName"
						value={this.state.AnotherName}
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
						placeholder="123 Happy St."
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
						label="Account Type"
						name={"AccountType1"}
						value={this.state.AccountType1}
						onChange={this.handleChange}
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
						placeholder="Business Checking"
						className="inputBoxes"
					/>
				</div>
				<button onClick={this.updateCardHandler}>Change Sigs</button>
				<div className="buttonContainer">
					<Button
						variant="contained"
						color="default"
						// onClick={this.updateCardHandler}
						className="submitButton"
					>
						Generate Signature Card
					</Button>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(App);
