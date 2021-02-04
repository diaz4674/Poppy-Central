import React from "react"
import Select from "react-select"
import { connect } from "react-redux"

class AddMembersInput extends React.Component {
	state = {
		selectedOptions: [],
	}
	handleChange = (selectedOptions) => {
		this.setState({ selectedOptions })
		this.props.updateMembers(selectedOptions)
	}
	render() {
		return (
			<>
				<div className="AddMembersInput">
					<Select
						options={this.props.teamMembers}
						value={this.state.selectedOption}
						onChange={this.handleChange}
						isMulti
					/>
				</div>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		teamMembers: state.teamMembers,
	}
}

export default connect(mapStateToProps, {})(AddMembersInput)
