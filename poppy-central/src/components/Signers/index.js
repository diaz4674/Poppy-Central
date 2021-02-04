import React, { Component } from "react"
import ListItem from "@material-ui/core/ListItem"
import checkmark from "../../assets/check.svg"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import Avatar from "@material-ui/core/Avatar"
import AvatarGroup from "@material-ui/lab/AvatarGroup"
import "./style.css"

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

class Signers extends Component {
	state = {
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
			{
				name: "James Meek",
			},
		],
		toggleSigners: false,
		TeamMembers: [],
	}
	async componentDidMount() {
		let { TeamMembers, accountSigners } = this.props
		await this.setState({ ...this.state, TeamMembers, accountSigners })
	}

	render() {
		let { TeamMembers, accountSigners } = this.state
		return (
			<div
				className="SpecialProjects"
				style={{ display: "flex", flexDirection: "column" }}
			>
				{accountSigners === undefined ? (
					<p>loading</p>
				) : (
					<>
						<p className="mediumTitle" style={{ color: "#595a59" }}>
							Signers:
						</p>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								alignItems: "flex-start",
							}}
						>
							{Object.values(accountSigners).map((signer, index) => {
								return (
									<div
										key={index}
										style={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "flex-start",
											alignItems: "center",
										}}
									>
										<img
											src={checkmark}
											alt="checkmark"
											style={{ width: "25px" }}
										/>
										<ListItem>
											<ListItemText primary={signer.Name} />
											<div className="Line" />
										</ListItem>
									</div>
								)
							})}
							{/* <div className="specialBox"> */}
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
												{TeamMembers.map((member) => {
													return <p>{member.value} </p>
												})}
											</div>
										</div>
									) : null}
									<AvatarGroup max={TeamMembers.length}>
										{TeamMembers.map((member, index) => (
											<Avatar
												key={index}
												alt={member.value}
												// src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
											/>
										))}
									</AvatarGroup>
									{/* </div> */}
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		)
	}
}

Signers.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(Signers)
