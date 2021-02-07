import "../../global.css"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import axios from "axios"
import download from "downloadjs"

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
		button: {
			margin: theme.spacing(1),
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
			maxWidth: 300,
		},
	},
}))

class OMG extends Component {
	constructor(props) {
		super(props)
		this.state = {
			AccountChanges: [],

			toggleCheckboxes: {
				prefix: false,
				addLine: false,
				prefixClass: "",
				addLineClass: "",
				inputBoxes: "",
			},
			loading: false,
		}
	}

	async componentDidMount() {
		await this.setState({ AccountChanges: this.props.accountInfo })
	}

	updateCardHandler = () => {
		this.setState({
			...this.state.AccountChanges,
			loading: true,
		})
		axios
			.post(
				// "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/",
				"https://poppy-central.herokuapp.com/signatureCard",
				this.state.AccountChanges,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(
					res.data,
					`${this.state.AccountChanges[0].BusinessName} - Sig Card`,
					res.content
				)

				console.log(res)
				return res
			})
			.catch((error) => console.log(error))
		axios
			.post(
				// "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/resolution",
				"https://poppy-central.herokuapp.com/resolution",
				this.state.AccountChanges,
				{ responseType: "blob" } // had to add this one here
			)
			.then((res) => {
				download(
					res.data,
					`${this.state.AccountChanges[0].BusinessName} - Resolution`,
					res.content
				)
				this.setState({ ...this.state, loading: false })
				console.log(res)
				return res
			})
			.catch(
				(error) => (
					alert(
						"Oops! Something funny happened. Try again or contact the admin."
					),
					this.setState({ ...this.state, loading: false })
				)
			)
		this.setState({
			...this.state,
			loading: false,
		})
	}

	handleCheckboxChange = (e) => {
		this.state.toggleCheckboxes[e.target.name] = !this.state.toggleCheckboxes[
			e.target.name
		]
		let { toggleCheckboxes } = this.state
		if (this.state.toggleCheckboxes.prefix === false) {
			this.state.AccountChanges[0]["PrefixName"] = ""
			let { AccountInfo } = this.state.AccountChanges[0]
			this.setState({
				...this.state,
				AccountInfo,
			})
		}
		this.setState({ ...this.state, toggleCheckboxes })

		if (e.target.name === "prefix") {
			if (toggleCheckboxes.prefix) {
				this.setState({
					...this.state,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						prefixClass: "prefix",
						inputBoxes: "inputBoxes",
						addLineOption: "addLineOption",
					},
				})
			} else {
				this.state.AccountChanges[0]["Prefix"] = ""
				this.state.AccountChanges[0]["PrefixName"] = ""
				this.state.AccountChanges[0]["PrefixEIN"] = ""
				let { AccountInfo } = this.state.AccountChanges[0]
				this.setState({
					...this.state,
					toggleCheckboxes: {
						prefixClass: "",
					},
					AccountInfo,
				})
			}
		} else {
			if (toggleCheckboxes.addLine) {
				this.setState({
					...this.state,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						addLineClass: "addLineClass",
						inputBoxes: "inputBoxes",
					},
				})
			} else {
				this.setState({
					...this.state,
					toggleCheckboxes: {
						...this.state.toggleCheckboxes,
						addLineClass: "",
					},
				})
			}
		}
		// console.log(this.state.toggleCheckboxes)
	}

	handleChange = (e) => {
		// console.log(e.target.name, "ACCCT")
		// let change = e.target.name
		// let changeValue = e.target.value
		this.state.AccountChanges.OMG[e.target.name] = e.target.value
		let { AccountInfo } = this.state.AccountChanges.OMG
		// console.log(change)
		this.setState({ AccountInfo })
	}
	render() {
		// let business = AccountChanges[0]
		let {
			prefixClass,
			inputBoxes,
			prefix,
			addLineOption,
			addLine,
			addLineClass,
		} = this.state.toggleCheckboxes

		const { classes } = this.props
		return <div className="container"></div>
	}
}

OMG.propTypes = {
	classes: PropTypes.object.isRequired,
}

// export default

export default withStyles(useStyles)(OMG)
