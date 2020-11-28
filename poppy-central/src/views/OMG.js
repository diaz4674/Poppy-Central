import logo from "./logo-mobile.svg";
import "./OMG.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import download from "downloadjs";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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

class OMG extends Component {
	state = {
		AccountChanges: [
			{
				Type: "Business",
				Ownership: "CCorp",
				Benificiary: "",
				BeneficiaryDetails: "",
				totalSigners: 3,
				BusinessName: "Oakmont Management Group Agent",
				Prefix: "",
				PrefixName: "",
				AnotherName: "",
				Street: "123 Main St",
				City: "Santa Rosa, CA 94949",
				EIN: "12-345676",
				AccountType1: "",
				AccountNumber1: "",
			},
			{
				Name: "Billy Bob",
				Relationship: "Owners",
				Street: "123 Happy Dr",
				Position: "COO",
				City: "Petaluma, CA 94952",
				MailingAddress: "PO Box 123, Petaluma CA 94954",
				PrimaryIDType: "Drivers License",
				Number: "D234354 CA",
				IssueDate1: "10/07/2017",
				ExpirationDate1: "10/18/2022",
				OtherID: "Credit Card",
				OtherDesc: "Visa",
				Expires: "02/28/2023",
				Employer: "Poppy Bank",
				Title: "New Accounts/CSR-Poppy Bank",
				email: "diaz1234@gmail.com",
				WorkPhone: "",
				HomePhone: "(707) 778-7756",
				Cell: "(123) 456-7890",
				DOB: "10/18/1991",
				SSN: "123-34-2134",
			},
			{
				Name: "James Brown",
				Relationship: "Owners",
				Street: "123 Happy Dr",
				Position: "COO",
				City: "Petaluma, CA 94952",
				MailingAddress: "PO Box 123, Petaluma CA 94954",
				PrimaryIDType: "Drivers License",
				Number: "D234354 CA",
				IssueDate1: "10/07/2017",
				ExpirationDate1: "10/18/2022",
				OtherID: "Credit Card",
				OtherDesc: "Visa",
				Expires: "02/28/2023",
				Employer: "Poppy Bank",
				Title: "New Accounts/CSR-Poppy Bank",
				email: "diaz1234@gmail.com",
				WorkPhone: "(707) 778-7756",
				HomePhone: "(707) 778-7756",
				Cell: "(123) 456-7890",
				DOB: "10/18/1991",
				SSN: "123-34-2134",
			},
			{
				Name: "Jimmy Neutron",
				Relationship: "Owners",
				Street: "123 Happy Dr",
				Position: "COO",
				City: "Petaluma, CA 94952",
				MailingAddress: "PO Box 123, Petaluma CA 94954",
				PrimaryIDType: "Drivers License",
				Number: "D234354 CA",
				IssueDate1: "10/07/2017",
				ExpirationDate1: "10/18/2022",
				OtherID: "Credit Card",
				OtherDesc: "Visa",
				Expires: "02/28/2023",
				Employer: "Poppy Bank",
				Title: "New Accounts/CSR-Poppy Bank",
				email: "diaz1234@gmail.com",
				WorkPhone: "(707) 778-7756",
				HomePhone: "(707) 778-7756",
				Cell: "(123) 456-7890",
				DOB: "10/18/1991",
				SSN: "123-34-2134",
			},
			{
				Name: "Timmy Turner",
				Relationship: "Owners",
				Street: "123 Happy Dr",
				Position: "COO",
				City: "Petaluma, CA 94952",
				MailingAddress: "PO Box 123, Petaluma CA 94954",
				PrimaryIDType: "Drivers License",
				Number: "D234354 CA",
				IssueDate1: "10/07/2017",
				ExpirationDate1: "10/18/2022",
				OtherID: "Credit Card",
				OtherDesc: "Visa",
				Expires: "02/28/2023",
				Employer: "Poppy Bank",
				Title: "New Accounts/CSR-Poppy Bank",
				email: "diaz1234@gmail.com",
				WorkPhone: "(707) 778-7756",
				HomePhone: "(707) 778-7756",
				Cell: "(123) 456-7890",
				DOB: "10/18/1991",
				SSN: "123-34-2134",
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
	};

	componentDidMount() {
		console.log(this.state.AccountChanges);
	}
	updateCardHandler = () => {
		this.setState({
			...this.state.AccountChanges,
			loading: true,
		});
		console.log(this.state.AccountChanges);
		axios
			.post(
				// "https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/",
				"http://127.0.0.1:5000/",
				this.state.AccountChanges,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(
					res.data,
					`${this.state.AccountChanges[0].BusinessName} - Sig Card`,
					res.content
				);

				console.log(res);
				return res;
			})
			.catch((error) => console.log(error));
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
				);
				this.setState({ ...this.state, loading: false });
				console.log(res);
				return res;
			})
			.catch(
				(error) => (
					alert(
						"Oops! Something funny happened. Try again or contact the admin."
					),
					this.setState({ ...this.state, loading: false })
				)
			);
		this.setState({
			...this.state,
			loading: false,
		});
	};
	handleCheckboxChange = (e) => {
		this.state.toggleCheckboxes[e.target.name] = !this.state.toggleCheckboxes[
			e.target.name
		];
		let { toggleCheckboxes } = this.state;
		if (this.state.toggleCheckboxes.prefix === false) {
			this.state.AccountChanges[0]["PrefixName"] = "";
			let { AccountInfo } = this.state.AccountChanges[0];
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
		this.state.AccountChanges[0][e.target.name] = e.target.value;
		let { AccountInfo } = this.state.AccountChanges[0];
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
		return (
			<div className="container">
				<div>
					<TextField
						id="outlined-basic"
						value={this.state.AccountChanges[0].BusinessName}
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
							value={this.state.AccountChanges[0].Prefix}
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
						value={this.state.AccountChanges[0].PrefixName}
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
							value={this.state.AccountChanges[0].AnotherName}
							onChange={this.handleChange}
							style={{ width: "280px", paddingLeft: "18px !important" }}
							variant="outlined"
							className={`noShow ${addLineClass} ${inputBoxes}`}
						/>
					</FormGroup>
					<TextField
						id="outlined-basic"
						name="EIN"
						value={this.state.AccountChanges[0].EIN}
						onChange={this.handleChange}
						label="EIN"
						variant="outlined"
						className="inputBoxes"
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
					/>
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
						label="City"
						name="City"
						value={this.state.AccountChanges[0].City}
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
		);
	}
}

OMG.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(OMG);
