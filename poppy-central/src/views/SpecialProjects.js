import logo from "./logo-mobile.svg"
import "./SpecialProjects.css"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import React, { Component } from "react"
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import Button from "@material-ui/core/Button"
import download from "downloadjs"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import OMG from "./OMG"
import Signers from "./Signers"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

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
