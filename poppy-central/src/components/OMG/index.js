import "../../global.css"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"

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
			// AccountChanges: [
			// 	{
			// 		Type: "Business",
			// 		Ownership: "LLC",
			// 		Benificiary: "",
			// 		BeneficiaryDetails: "",
			// 		totalSigners: 4,
			// 		BusinessName: "Oakmont Management Group LLC",
			// 		Prefix: "",
			// 		PrefixName: "",
			// 		PrefixEIN: "",
			// 		AnotherName: "",
			// 		Street: "9240 Old Redwood Hwy Ste 200",
			// 		City: "Windsor, CA 95492",
			// 		EIN: "46-1228206",
			// 		AccountType1: "OMG PAYROLL",
			// 		AccountNumber1: "01-1002451-9",
			// 	},
			// 	{
			// 		Name: "Kevin Tyler",
			// 		Relationship: "Auth Signer/Control Party",
			// 		Street: "572 Lucero Ave",
			// 		Position: "CFO & CIO",
			// 		City: "Pacific Palisades, CA 90272",
			// 		MailingStreet: "1920 Main St Ste 1200",
			// 		MailingCity: "Irvine, CA 92614",
			// 		PrimaryIDType: "Drivers License",
			// 		Number: "F3582765 CA",
			// 		IssueDate1: "01/26/2017",
			// 		ExpirationDate1: "01/19/2022",
			// 		OtherID: "Passport",
			// 		OtherDesc: "Passport",
			// 		Expires: "09/26/2021",
			// 		Employer: "Oakmont Management Group",
			// 		Title: "CFO",
			// 		email: "ktyler@oakmontmg.com",
			// 		WorkPhone: "",
			// 		HomePhone: "",
			// 		Cell: "(516) 353-7650",
			// 		DOB: "01/19/1981",
			// 		SSN: "071-66-8503",
			// 	},
			// 	{
			// 		Name: "Courtney Siegel",
			// 		Relationship: "Authorized Signer",
			// 		Street: "649 Regency Cir",
			// 		Position: "President & CEO",
			// 		City: "Sacramento, CA 95864",
			// 		MailingStreet: "1920 Main St Ste 1200",
			// 		MailingCity: "Irvine, CA 92614",
			// 		PrimaryIDType: "Drivers License",
			// 		Number: "B8862965 CA",
			// 		IssueDate1: "09/29/2017",
			// 		ExpirationDate1: "03/18/2022",
			// 		OtherID: "Credit Card",
			// 		OtherDesc: "Visa",
			// 		Expires: "02/28/2023",
			// 		Employer: "Oakmont Management Group",
			// 		Title: "Presiden & CEO",
			// 		email: "courtney.siegel@oakmontmg.com",
			// 		WorkPhone: "(509) 979-7256",
			// 		HomePhone: "",
			// 		Cell: "",
			// 		DOB: "03/18/1983",
			// 		SSN: "564-85-8403",
			// 	},
			// 	{
			// 		Name: "Matthew Stevenson",
			// 		Relationship: "Authorized Signer",
			// 		Street: "12436 Altura Dr",
			// 		Position: "COO",
			// 		City: "Rancho Cucamonga, CA 91739",
			// 		MailingStreet: "1920 Main St Ste 1200",
			// 		MailingCity: "Irvine, CA 92614",
			// 		PrimaryIDType: "Drivers License",
			// 		Number: "B7218423 CA",
			// 		IssueDate1: "03/02/2020",
			// 		ExpirationDate1: "01/20/2025",
			// 		OtherID: "Passport",
			// 		OtherDesc: "Passport",
			// 		Expires: "09/26/2021",
			// 		Employer: "Poppy Bank",
			// 		Title: "COO",
			// 		email: "matt.stevenson@oakmontmg.com",
			// 		WorkPhone: "",
			// 		HomePhone: "",
			// 		Cell: "(909) 210-1043",
			// 		DOB: "01/20/1981",
			// 		SSN: "613-32-6511",
			// 	},
			// 	{
			// 		Name: "James Nicholas Meek",
			// 		Relationship: "Authorized Signer",
			// 		Street: "11 Spring Harbor",
			// 		Position: "COO",
			// 		City: "Aliso Viejo, CA 92656",
			// 		MailingStreet: "",
			// 		MailingCity: "",
			// 		PrimaryIDType: "Drivers License",
			// 		Number: "D8745399 CA",
			// 		IssueDate1: "04/27/2020",
			// 		ExpirationDate1: "06/17/2025",
			// 		OtherID: "Credit Card",
			// 		OtherDesc: "Visa",
			// 		Expires: "05/30/2025",
			// 		Employer: "Oakmont Management Group",
			// 		Title: "Controller",
			// 		email: "jmeek@oakmontmg.com",
			// 		WorkPhone: "",
			// 		HomePhone: "",
			// 		Cell: "(949) 302-2586",
			// 		DOB: "06/17/1982",
			// 		SSN: "645-28-6234",
			// 	},
			// ],

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
	// updateCardHandler = () => {
	//     this.setState({
	//         ...this.state.AccountChanges,
	//         loading: true,
	//     })
	//     console.log(this.state)
	//     axios
	//         .post(
	//             // "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/",
	//             "http://127.0.0.1:5000/signatureCard",
	//             this.state.AccountChanges,
	//             { responseType: "blob" } // had to add this one here
	//         )
	//         .then((res) => {
	//             download(
	//                 res.data,
	//                 `${this.state.AccountChanges[0].BusinessName} - Sig Card`,
	//                 res.content
	//             )

	//             console.log(res)
	//             return res
	//         })
	//         .catch((error) => console.log(error))
	//     axios
	//         .post(
	//             // "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/resolution",
	//             "http://127.0.0.1:5000/resolution",
	//             this.state.AccountChanges,
	//             { responseType: "blob" } // had to add this one here
	//         )
	//         .then((res) => {
	//             download(
	//                 res.data,
	//                 `${this.state.AccountChanges[0].BusinessName} - Resolution`,
	//                 res.content
	//             )
	//             this.setState({ ...this.state, loading: false })
	//             console.log(res)
	//             return res
	//         })
	//         .catch(
	//             (error) => (
	//                 alert(
	//                     "Oops! Something funny happened. Try again or contact the admin."
	//                 ),
	//                 this.setState({ ...this.state, loading: false })
	//             )
	//         )
	//     this.setState({
	//         ...this.state,
	//         loading: false,
	//     })
	// }
	// handleCheckboxChange = (e) => {
	//     this.state.toggleCheckboxes[e.target.name] = !this.state.toggleCheckboxes[
	//         e.target.name
	//     ]
	//     let { toggleCheckboxes } = this.state
	//     if (this.state.toggleCheckboxes.prefix === false) {
	//         this.state.AccountChanges[0]["PrefixName"] = ""
	//         let { AccountInfo } = this.state.AccountChanges[0]
	//         this.setState({
	//             ...this.state,
	//             AccountInfo,
	//         })
	//     }
	//     this.setState({ ...this.state, toggleCheckboxes })

	//     if (e.target.name === "prefix") {
	//         if (toggleCheckboxes.prefix) {
	//             this.setState({
	//                 ...this.state,
	//                 toggleCheckboxes: {
	//                     ...this.state.toggleCheckboxes,
	//                     prefixClass: "prefix",
	//                     inputBoxes: "inputBoxes",
	//                     addLineOption: "addLineOption",
	//                 },
	//             })
	//         } else {
	//             this.state.AccountChanges[0]["Prefix"] = ""
	//             this.state.AccountChanges[0]["PrefixName"] = ""
	//             this.state.AccountChanges[0]["PrefixEIN"] = ""
	//             let { AccountInfo } = this.state.AccountChanges[0]
	//             this.setState({
	//                 ...this.state,
	//                 toggleCheckboxes: {
	//                     prefixClass: "",
	//                 },
	//                 AccountInfo,
	//             })
	//         }
	//     } else {
	//         if (toggleCheckboxes.addLine) {
	//             this.setState({
	//                 ...this.state,
	//                 toggleCheckboxes: {
	//                     ...this.state.toggleCheckboxes,
	//                     addLineClass: "addLineClass",
	//                     inputBoxes: "inputBoxes",
	//                 },
	//             })
	//         } else {
	//             this.setState({
	//                 ...this.state,
	//                 toggleCheckboxes: {
	//                     ...this.state.toggleCheckboxes,
	//                     addLineClass: "",
	//                 },
	//             })
	//         }
	//     }
	//     // console.log(this.state.toggleCheckboxes)
	// }

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