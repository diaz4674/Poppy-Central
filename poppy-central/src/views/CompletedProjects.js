import logo from "./logo-mobile.svg";
import "./CompletedProjects.css";
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
import OMG from "./OMG";
import Signers from "./Signers";
import { withRouter } from "react-router-dom";

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

class CompletedProjects extends Component {
	state = {
		AccountChanges: [
			{
				Type: "Business",
				Ownership: "CCorp",
				Benificiary: "",
				BeneficiaryDetails: "",
				totalSigners: 3,
				BusinessName: "Nordby Construction",
				Prefix: "DBA",
				PrefixName: "Curtain Project",
				AnotherName: "",
				Street: "123 Main St",
				City: "Santa Rosa, CA 94949",
				EIN: "12-345676",
				AccountType1: "01-100034-1",
				AccountNumber1: "Business Checking",
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
				<div className="InputBox">
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<img
							src={logo}
							className="logo"
							onClick={() => this.props.history.push("/")}
						/>
					</div>
					<h1 style={{ fontFamily: "Roboto sans-serif", color: "#595a59" }}>
						Nordby Construction
					</h1>
					<Signers />
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
								"Download Docs"
							)}
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

CompletedProjects.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(CompletedProjects);
