import React from "react"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import AddMembersInput from "../AddMembersInput"
import "./style.css"

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}))

const PurpleSwitch = withStyles({
	switchBase: {
		color: "gray",
		"&$checked": {
			color: "pink",
		},
		"&$checked + $track": {
			backgroundColor: "hsl(0,0%,80%)",
		},
	},
	checked: {},
	track: {},
})(Switch)

class SwitchesGroup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			addMembers: false,
		}
	}

	handleChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.checked })
		// resets member state to parent if no members to project option selected
		if (this.state.addMembers) {
			this.props.getMembers([])
		}
	}
	updateMembers = (name) => {
		this.props.getMembers(name)
	}

	render() {
		return (
			<FormControl component="fieldset">
				{/* <FormLabel component="legend">Add Team Members to Project</FormLabel> */}
				<FormGroup>
					<FormControlLabel
						control={
							<PurpleSwitch
								checked={this.state.addMembers}
								onChange={this.handleChange}
								name="addMembers"
							/>
						}
						label="Add Team Members to Project"
					/>
				</FormGroup>
				{this.state.addMembers ? (
					<AddMembersInput updateMembers={this.updateMembers} />
				) : null}
			</FormControl>
		)
	}
}

SwitchesGroup.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(SwitchesGroup)
