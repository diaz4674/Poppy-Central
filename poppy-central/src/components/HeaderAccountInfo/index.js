import React from "react"
// import Radio from "@material-ui/core/Radio"
// import RadioGroup from "@material-ui/core/RadioGroup"
// import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import "./style.css"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import AddMembers from "../AddMembers"
import { withRouter } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}))

class FormControlLabelPlacement extends React.Component {
	state = {
		signers: "",
		ProjectName: "",
		teamMembers: [],
		type: "",
	}

	handleChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value })
	}

	getMembers = (members) => {
		this.setState({ ...this.state, teamMembers: members })
	}

	handleChangeRadio = (e) => {
		this.setState({ ...this.state, type: e.target.value })
	}

	render() {
		return (
			<div style={{ padding: "15px", height: "auto" }}>
				<FormControl component="fieldset">
					<TextField
						id="outlined-basic"
						value={this.state.ProjectName}
						name="ProjectName"
						onChange={this.handleChange}
						label="Project Name"
						variant="outlined"
						className="inputBoxes"
					/>
					<div className="row" style={{ margin: "15px 0" }}>
						{/* <RadioGroup
							row
							aria-label="position"
							name="position"
							defaultValue="top"
						>
							<FormControlLabel
								value="Personal"
								name="Personal"
								control={<Radio color="primary" />}
								label="Personal"
								onChange={this.handleChangeRadio}
								labelPlacement="top"
							/>
							<FormControlLabel
								value="Business"
								control={<Radio color="primary" />}
								label="Business"
								name="Business"
								onChange={this.handleChangeRadio}
								labelPlacement="top"
							/>
						</RadioGroup> */}
						<FormControl>
							<InputLabel id="demo-simple-select-label">
								Number of Signers
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={this.state.signers}
								name="signers"
								onChange={this.handleChange}
								style={{ width: "200px" }}
							>
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
								<MenuItem value={4}>4</MenuItem>
							</Select>
						</FormControl>
					</div>
					<AddMembers getMembers={this.getMembers} />
					<div className="buttonContainer">
						<Button
							variant="contained"
							color="default"
							onClick={() =>
								this.props.history.push({
									pathname: "/app-main/InputSignerData",
									state: { inputData: this.state },
								})
							}
							className="submitButton"
						>
							Next
						</Button>
					</div>
				</FormControl>
			</div>
		)
	}
}

FormControlLabelPlacement.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(useStyles)(FormControlLabelPlacement))
