import React from "react";
import Select from "react-select";

const aquaticCreatures = [
	{ label: "Sarah Conners", value: "Sarah Conners" },
	{ label: "Mike Smith", value: "Mike Smith" },
	{ label: "Wally Borg", value: "Whale" },
	{ label: "Cindy Lok", value: "Cindy Lok" },
	{ label: "Kirk Wood", value: "Kirk Wood" },
	{ label: "Laguna Wayward", value: "Laguna Wayward" },
];

class AddMembersInput extends React.Component {
	state = {
		selectedOptions: [],
	};
	handleChange = (selectedOptions) => {
		this.setState({ selectedOptions });
		this.props.updateMembers(selectedOptions);
	};
	render() {
		return (
			<>
				<div className="AddMembersInput">
					<Select
						options={aquaticCreatures}
						value={this.state.selectedOption}
						onChange={this.handleChange}
						isMulti
					/>
				</div>
			</>
		);
	}
}

export default AddMembersInput;
