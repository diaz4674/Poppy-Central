import logo from "./logo-mobile.svg";
import "./Home.css";
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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import checkmark from "./check.svg";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import contract from "./contract.svg";
import ImageIcon from "@material-ui/icons/Image";

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

class Home extends Component {
	render() {
		return (
			<div className="container">
				<div className="InputBox">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignContent: "center",
							justifyContent: "center",
							width: "100%",
							margin: "0 0 30px",
						}}
					>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<img src={logo} className="logo" />
						</div>
						<h1 style={{ fontFamily: "Roboto sans-serif", color: "#595a59" }}>
							Poppy Central
						</h1>
						<div className="SpecialProjects">
							<p className="mediumTitle" style={{ color: "#595a59" }}>
								Create:
							</p>
							<div className="specialBox">
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										padding: "15px",
									}}
									onClick={() =>
										this.props.history.push("/app-main/SignerChanges")
									}
								>
									{/* <div className="grayCircle"> */}
									<img
										src={contract}
										alt="checkmark"
										style={{ width: "48px" }}
									/>
									{/* </div> */}
									<ListItem>
										<ListItemText primary="Signer Changes" />
									</ListItem>
								</div>
								<div className="Line" />
							</div>
						</div>
						<div className="SpecialProjects">
							<p className="mediumTitle" style={{ color: "#595a59" }}>
								Special Projects:
							</p>
							<div className="specialBox">
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
									}}
									onClick={() => this.props.history.push("/app-main/omg")}
								>
									<ListItem>
										<ListItemText
											primary="Oakmont Management Group"
											secondary="Signer Changes"
										/>
									</ListItem>
									<AvatarGroup max={4}>
										<Avatar
											alt="Remy Sharp"
											src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
										/>
										<Avatar
											alt="Travis Howard"
											src="https://images.pexels.com/photos/2830332/pexels-photo-2830332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
										/>
									</AvatarGroup>
								</div>
								<div className="Line" />
							</div>
						</div>
						<div className="SpecialProjects">
							<p className="mediumTitle" style={{ color: "#595a59" }}>
								Completed Pending Items
							</p>
							<div className="specialBox">
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
									}}
									onClick={() =>
										this.props.history.push("/app-main/completedproject")
									}
								>
									<img
										src={checkmark}
										alt="checkmark"
										style={{ width: "25px" }}
									/>
									<ListItem>
										<ListItemText
											primary="Nordby Construction"
											secondary="Signer Changes"
										/>
									</ListItem>
								</div>
								<div className="Line" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Home);
