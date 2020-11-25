import logo from './logo-mobile.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import React, { Component } from "react";
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        button: {
            margin: theme.spacing(1),
        },
    },
}));

let AccountInfo = {
    "Type": "Business",
    "Ownership": "CCorp",
    "Benificiary": "",
    "BeneficiaryDetails": "",
    "totalSigners": 3,
    "BusinessName": "Diney Corp.",
    "DBA": "",
    "EIN": "12-2344564",
    "Street": "420 Disneyland Dr",
    "City": "Anaheim, CA 92802",
    "AccountType1": "Business Checking",
    "AccountNumber1": "01-1005345-1"
}


class App extends Component {
    state = {
        AccountInfo: {
            BusinessName: "",
            DBA: "",
            Street: "",
            City: "",
            EIN: "",
            AccountType1: "",
            AccountNumber1: ""

        }
    }

    updateCardHandler = () => {

        axios.post("https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/", AccountInfo)
            .then(res => {
                console.log(res.data)
                const file = new Blob(
                    [res.data],
                    { type: 'application/pdf' });
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL)

                console.log(res)
                return res
            })
            .catch(error => console.log(error));

        console.log('hi')

    }

    handleChange = (e) => {
        // let stateName = e.target.name
        // console.log(stateName)
        // JSON.stringify(stateName)

        AccountInfo[e.target.name] = e.target.value;
        this.setState({ AccountInfo });
        console.log(this.state)
    };
    render() {
        return (
            <div className="InputBox">
                <img src={logo} className="logo" />
                <div >
                    <TextField id="outlined-basic"
                        value={this.state.BusinessName}
                        name="BusinessName"
                        onChange={this.handleChange}
                        label="Business Name"
                        variant="outlined"
                        className="inputBoxes" />
                    <TextField id="outlined-basic" label="DBA" name="DBA" value={this.state.DBA} onChange={this.handleChange} variant="outlined" className="inputBoxes" />
                    <TextField id="outlined-basic" label="Street" multiline placeholder="123 Happy St." variant="outlined" className="inputBoxes" />
                    <TextField id="outlined-basic" label="City" multiline placeholder="Santa Rosa, CA 94949" variant="outlined" className="inputBoxes" />
                    <TextField id="outlined-basic" label="EIN" variant="outlined" className="inputBoxes" />
                    <TextField id="outlined-basic" label="Account Type" variant="outlined" className="inputBoxes" />
                    <TextField id="outlined-basic" label="Account Number" multiline variant="outlined" placeholder="Business Checking" className="inputBoxes" />
                </div>
                {/* <button onClick={this.updateCardHandler}>Change Sigs</button> */}
                <div className="buttonContainer">
                    <Button
                        variant="contained"
                        color="default"
                        // onClick={this.updateCardHandler}
                        className='submitButton'
                    >
                        Generate Signature Card
                </Button>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(App);
