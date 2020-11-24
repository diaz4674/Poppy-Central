import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import jsonFile from "../../signerData.json";

let AccountInfo = {
    "Type": "Business",
    "Ownership": "CCorp",
    "Benificiary": "",
    "BeneficiaryDetails": "",
    "totalSigners": 3,
    "BusinessName": "Walt Dis LLC",
    "DBA": "",
    "EIN": "12-2344564",
    "Street": "1313 Disneyland Dr",
    "City": "Anaheim, CA 92802",
    "AccountType1": "Business Checking",
    "AccountNumber1": "01-1005345-1"
}


class App extends Component {

    updateCardHandler = () => {


        // Creating a XHR object 
        let xhr = new XMLHttpRequest();
        let url = jsonFile;

        // open a connection 
        xhr.open("POST", url, true);

        // Set the request header i.e. which type of content you are sending 
        xhr.setRequestHeader("Content-Type", "application/json");

        // Create a state change callback 
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {

                // Print received data from server 
                result.innerHTML = this.responseText;

            }
        };

        // Converting JSON data to string 
        // var data = JSON.stringify({ "name": name.value, "email": email.value });

        // Sending data with the request 
        xhr.send(data);






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
