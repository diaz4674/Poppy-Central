import React from "react"
import "./style.css"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import { withRouter } from "react-router-dom"
import Accordian from "../Accordian"
import logo from "../../assets/logo-mobile.svg"
import Avatar from "@material-ui/core/Avatar"
import AvatarGroup from "@material-ui/lab/AvatarGroup"

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}))

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
	}

	async componentDidMount() {
		if ((await this.props.location.state.savedProject) === undefined) {
			let { inputData } = await this.props.location.state
			this.setState({
				...this.state,
				ProjectName: inputData.ProjectName,
				TeamMembers: inputData.teamMembers,
				numSigners: inputData.signers,
			})
		} else {
			let { savedProject, TeamMembers } = await this.props.location.state
			this.setState({
				...this.state,
				ProjectName: savedProject.ProjectName,
				TeamMembers: TeamMembers,
				numSigners: savedProject.totalSigners,
				savedProject,
			})
		}
	}

	handleChange = (e) => {
		let change = (this.state[e.target.name] = e.target.value)
		this.setState({ ...this.state, change })
	}

	getMembers = (members) => {
		this.setState({ ...this.state, teamMembers: members })
	}

	handleChangeRadio = (e) => {
		this.setState({ ...this.state, type: e.target.value })
	}

	render() {
		let { ProjectName, TeamMembers, savedProject } = this.state
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
								width: "100%",
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-start",
								alignItems: "center",
							}}
						>
							<h1>Project: {ProjectName}</h1>
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
												return <p>{member.value} </p>
											})}
										</div>
									</div>
								) : null}
								{TeamMembers ? (
									<AvatarGroup max={TeamMembers.length}>
										{TeamMembers.map((member) => {
											return (
												<Avatar
													alt={member.value}
													// src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
												/>
											)
										})}
									</AvatarGroup>
								) : null}
							</div>
						</div>
						{ProjectName !== "" ? (
							<Accordian savedProject={savedProject} AccountInfo={this.state} />
						) : null}
					</div>
				</div>
			</div>
		)
	}
}

InputSignerData.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(useStyles)(InputSignerData))
