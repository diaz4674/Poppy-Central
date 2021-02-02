import logo from "./logo-mobile.svg"
import "./OMG.css"
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
import InputLabel from "@material-ui/core/InputLabel"
import { connect } from "react-redux";

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
        console.log(this.props.accountInfo)
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
        let { AccountChanges } = this.state

        let business = AccountChanges[0]
        console.log(AccountChanges)
        let {
            prefixClass,
            inputBoxes,
            prefix,
            addLineOption,
            addLine,
            addLineClass,
        } = this.state.toggleCheckboxes

        const { classes } = this.props
        return (
            <div className="container">
                <div>
                    {
                        AccountChanges.length === 0 ? (
                            <h1>LOADING</h1>
                        ) : (
                                <div>
                                    <TextField
                                        id="outlined-basic"
                                        value={AccountChanges.BusinessName}
                                        name="BusinessName"
                                        onChange={this.handleChange}
                                        label="Business Name"
                                        variant="outlined"
                                        className="inputBoxes"
                                    />
                                    <FormGroup
                                        aria-label="position"
                                        className="checkBoxDiv"
                                        row
                                        style={{ padding: "0 53px" }}
                                    >
                                        <FormControlLabel
                                            value={prefix}
                                            control={<Checkbox />}
                                            style={{ color: "grey" }}
                                            label="Prefix"
                                            name="prefix"
                                            onChange={this.handleCheckboxChange}
                                            labelPlacement="start"
                                            className="checkBox"
                                        />
                                        <FormControl className={classes.formControl} id="prefixContainer">
                                            <InputLabel className={`noShow ${prefixClass}`} id="prefixLabel">
                                                Prefix Type
							</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="Prefix"
                                                // value={this.state.AccountChanges[0].Prefix}
                                                onChange={this.handleChange}
                                                style={{ width: "150px", marginLeft: "25px" }}
                                                className={`noShow ${prefixClass}`}
                                            >
                                                <MenuItem value={"DBA"}>DBA</MenuItem>
                                                <MenuItem value={"FBO"}>FBO</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            id="outlined-basic"
                                            label="Prefix EIN"
                                            name="PrefixEIN"
                                            // value={this.state.AccountChanges[0].PrefixEIN}
                                            onChange={this.handleChange}
                                            variant="outlined"
                                            className={`noShow ${prefixClass} ${inputBoxes} prefixEIN`}
                                            style={{ width: "200px", marginLeft: "20px" }}
                                        />
                                    </FormGroup>
                                    {/* Prefix Check  */}
                                    <TextField
                                        id="outlined-basic"
                                        label="Prefix Name"
                                        name="PrefixName"
                                        // value={this.state.AccountChanges[0].PrefixName}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        className={`noShow ${prefixClass} ${inputBoxes}`}
                                    />
                                    <FormGroup
                                        aria-label="position"
                                        className="checkBoxDiv"
                                        row
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            padding: "0 35px",
                                        }}
                                    >
                                        <FormControlLabel
                                            value={addLine}
                                            control={<Checkbox />}
                                            name="addLine"
                                            style={{ color: "grey" }}
                                            onChange={this.handleCheckboxChange}
                                            label="Add Line"
                                            labelPlacement="start"
                                            row
                                            className={`noShow ${addLineOption}`}
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Add Another Name"
                                            name="AnotherName"
                                            // value={this.state.AccountChanges[0].AnotherName}
                                            onChange={this.handleChange}
                                            style={{ width: "280px", paddingLeft: "18px !important" }}
                                            variant="outlined"
                                            className={`noShow ${addLineClass} ${inputBoxes}`}
                                        />
                                    </FormGroup>
                                    <TextField
                                        id="outlined-basic"
                                        name="EIN"
                                        // value={this.state.AccountChanges[0].EIN}
                                        onChange={this.handleChange}
                                        label="EIN"
                                        variant="outlined"
                                        className="inputBoxes"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Account Number"
                                        name={"AccountNumber1"}
                                        // value={this.state.AccountChanges[0].AccountNumber1}
                                        onChange={this.handleChange}
                                        multiline
                                        variant="outlined"
                                        className="inputBoxes"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Account Type"
                                        name={"AccountType1"}
                                        placeholder="Business Checking"
                                        // value={this.state.AccountChanges[0].AccountType1}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        className="inputBoxes"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Street"
                                        multiline
                                        name="Street"
                                        // value={this.state.AccountChanges[0].Street}
                                        onChange={this.handleChange}
                                        placeholder="123 Happy St."
                                        variant="outlined"
                                        className="inputBoxes"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="City"
                                        name="City"
                                        // value={this.state.AccountChanges[0].City}
                                        onChange={this.handleChange}
                                        multiline
                                        placeholder="Santa Rosa, CA 94949"
                                        variant="outlined"
                                        className="inputBoxes"
                                    />
                                    {/* <button onClick={this.updateCardHandler}>Change Sigs</button> */}
                                    <div className="buttonContainer">
                                        <Button
                                            variant="contained"
                                            color="default"
                                            onClick={this.updateCardHandler}
                                            className="submitButton"
                                        >
                                            {this.state.loading ? (
                                                <div class="load-3">
                                                    <div class="line"></div>
                                                    <div class="line"></div>
                                                    <div class="line"></div>
                                                </div>
                                            ) : (
                                                    "Generate Docs"
                                                )}
                                        </Button>
                                    </div>
                                </div>
                            )}
                </div>
            </div>
        )
    }
}

OMG.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        accountInfo: state.savedProjects
    };
};

// export default 

export default withStyles(useStyles)(connect(
    mapStateToProps,
    {}
)(OMG))
