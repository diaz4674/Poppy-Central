import logo from "../../assets/logo-mobile.svg"
import "./style.css"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import OMG from "../../components/OMG"
import Signers from "../../components/Signers"

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

	render() {
		console.log(this.props.location.state.savedProject)
		let {
			prefixClass,
			inputBoxes,
			prefix,
			addLineOption,
			addLine,
			addLineClass,
		} = this.state.toggleCheckboxes
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
						Oakmont Management Group
					</h1>
					<Signers />
					<OMG />
				</div>
			</div>
		)
	}
}

SpecialProjects.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(SpecialProjects)
