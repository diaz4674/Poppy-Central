import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import "./HeaderAccount.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddMembers from "./AddMembers";
import { withRouter } from "react-router-dom";
import Accordian from "./Accordian";
import logo from "./logo-mobile.svg";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

class InputSignerData extends React.Component {
	state = {
		signers: "",
		ProjectName: "",
		type: "",
		Signers: [
			{
				name: "Kevin Tyler",
			},
			{
				name: "Courtney Siegel",
			},
			{
				name: "Matthew Stevenson",
			},
		],
		toggleSigners: false,
		TeamMembers: [
			{
				name: "Sarah Conners",
			},
			{
				name: "Miggy Smallz",
			},
			{
				name: "Jamie Smith",
			},
		],
	};

	handleChange = (e) => {
		let change = (this.state[e.target.name] = e.target.value);
		this.setState({ ...this.state, change });
	};

	getMembers = (members) => {
		this.setState({ ...this.state, teamMembers: members });
	};

	handleChangeRadio = (e) => {
		this.setState({ ...this.state, type: e.target.value });
	};

	render() {
		return (
			<div className="container">
				<div
					className="InputBox"
					style={{ padding: "35px 20px", width: "900px" }}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignContent: "center",
							justifyContent: "center",
							width: "100%",
							margin: "0",
						}}
					>
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
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<p
								className="mediumTitle"
								style={{ color: "#595a59", paddingRight: "15px" }}
							>
								Team Members Involved:
							</p>
							<div
								onMouseEnter={() =>
									this.setState({ ...this.state, toggleSigners: true })
								}
								onMouseLeave={() =>
									this.setState({ ...this.state, toggleSigners: false })
								}
							>
								{this.state.toggleSigners ? (
									<div className="teamMemberBox">
										<div className="showSigners">
											{this.state.TeamMembers.map((member) => {
												return <p>{member.name} </p>;
											})}
										</div>
									</div>
								) : null}
								<AvatarGroup max={4}>
									<Avatar
										alt="Sarah Lincoln"
										src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									/>
									<Avatar
										alt="Miguel Smallz"
										src="https://images.pexels.com/photos/2830332/pexels-photo-2830332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									/>
									<Avatar
										alt="Tina Smith"
										src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									/>
								</AvatarGroup>
								{/* </div> */}
							</div>
						</div>
						<Accordian />
					</div>
				</div>
			</div>
		);
	}
}

InputSignerData.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(useStyles)(InputSignerData));
