import "date-fns"
import React from "react"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers"
import "../../global.css"

class DateToggler extends React.Component {
	// The first commit of Material-UI
	state = {
		selectedDate: new Date("2014-08-18T21:11:54"),
	}
	// const [selectedDate, setSelectedDate] = React.useState(

	// );

	handleDateChange = (date) => {
		this.setState({ selectedDate: date })
	}

	render() {
		return (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justify="space-around">
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						label={this.props.titleName}
						value={this.state.selectedDate}
						onChange={this.handleDateChange}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
					/>
				</Grid>
			</MuiPickersUtilsProvider>
		)
	}
}

export default DateToggler
