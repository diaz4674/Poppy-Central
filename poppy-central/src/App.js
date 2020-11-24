import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import axios from "axios"

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

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
        </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
        </a>
                    <button onClick={this.updateCardHandler}>Change Sigs</button>
                </header>
            </div>
        );
    }
}

export default App;
