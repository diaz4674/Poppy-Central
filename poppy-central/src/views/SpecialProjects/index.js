import logo from "../../assets/logo-mobile.svg"
import "./style.css"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import OMG from "../../components/OMG"
import Signers from "../../components/Signers"
import { iterateSigners } from "../../modules/iterateSigners"
import { generateDocs } from "../../actions"
import Button from "@material-ui/core/Button"

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

class SpecialProjects extends Component {
	state = {
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
		let {
			TeamMembers,
			ProjectName,
			totalSigners,
			businessInfo,
		} = this.props.history.location.state.savedProject

		let accountSigners = iterateSigners(
			totalSigners,
			this.props.history.location.state.savedProject
		)

		await this.setState({
			...this.state,
			ProjectName,
			totalSigners,
			TeamMembers,
			businessInfo,
			accountSigners,
		})
	}

	downloadDocs = async (e) => {
		console.log(this.state)
		let { businessInfo, totalSigners, accountSigners } = this.state

		let payload = {
			AccountInfo: businessInfo,
			totalSigners,
		}

		for (let i = 1; i < totalSigners + 1; i++) {
			if (accountSigners[`signer${+i}`] === undefined) {
				return alert("Sorry looks like your still missing some info")
			}
			payload[`signer${+i}`] = accountSigners[`signer${+i}`]
		}

		console.log(payload)

		await generateDocs(payload)
	}

	render() {
		let {
			TeamMembers,
			ProjectName,
			accountSigners,
			// signers
		} = this.state

		return (
			<div className="container">
				{accountSigners === undefined ? (
					<p1>loading</p1>
				) : (
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
							{ProjectName}
						</h1>
						<div className="SpecialProjects">
							<Signers
								accountSigners={accountSigners}
								TeamMembers={TeamMembers}
							/>
							<div style={{ width: "100%", margin: "0 0 25px 0" }}>
								<Button
									variant="contained"
									color="default"
									onClick={this.downloadDocs}
									className="submitButton"
								>
									{this.loading ? (
										<div class="load-3">
											<div class="line"></div>
											<div class="line"></div>
											<div class="line"></div>
										</div>
									) : (
										"Download Documents"
									)}
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

SpecialProjects.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(SpecialProjects)
