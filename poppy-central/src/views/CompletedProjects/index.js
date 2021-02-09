import logo from "../../assets/logo-mobile.svg"
import "./style.css"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import React, { Component } from "react"
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import download from "downloadjs"
import Signers from "../../components/Signers"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import {
    generateDocs,
    loadingAnimation,
    saveProjectToStore,
    updateProjectToStore,
} from "../../actions"

class CompletedProjects extends Component {
    state = {
        AccountChanges: [

        ],
        toggleCheckboxes: {
            prefix: false,
            addLine: false,
            prefixClass: "",
            addLineClass: "",
            inputBoxes: "",
        },
        loading: false,
    }

    componentDidMount() {
        this.setState({ AccountChanges: this.props.completed })
    }

    updateCardHandler = () => {
        this.setState({
            ...this.state.AccountChanges,
            loading: true,
        })
        axios
            .post(
                // "https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/",
                "http://127.0.0.1:5000/signatureCard",
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
                // "https://5000-c85a660f-3dbe-4fc9-9c8c-83ea85769df5.ws-us02.gitpod.io/",
                "http://127.0.0.1:5000/resolution",
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

    render() {
        let {
            prefixClass,
            inputBoxes,
            prefix,
            addLineOption,
            addLine,
            addLineClass,
        } = this.state.toggleCheckboxes

        let { TeamMembers, ProjectName, accountSigners } = this.state
        let { loading } = this.props

        console.log(this.state)
        return (
            <div className="container">
                {this.state.AccountChanges === [] ? <p>loading</p> :
                    <div className="InputBox">
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={logo}
                                className="logo"
                                onClick={() => this.props.history.push("/")}
                            />
                        </div>
                        <h1 style={{ fontFamily: "Roboto sans-serif", color: "#595a59" }}>
                            {ProjectName}
                        </h1>
                        <div className="SpecialProjects">
                            <Signers
                                accountSigners={accountSigners}
                                TeamMembers={TeamMembers}
                            />
                            <div style={{ width: "100%", margin: "0 0 25px 0" }}>
                                <Button
                                    variant="contained"
                                    color="default"
                                    onClick={this.downloadDocs}
                                    className="submitButton"
                                >
                                    {loading && (
                                        <div class="load-3">
                                            <div class="line"></div>
                                            <div class="line"></div>
                                            <div class="line"></div>
                                        </div>
                                    )}
                                    {!loading && "Download Documents"}
                                </Button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { loading: state.isFetching, completed: state.Completed }
}

export default withRouter(
    connect(mapStateToProps, {
        generateDocs,
        saveProjectToStore,
        loadingAnimation,
        updateProjectToStore,
    })(CompletedProjects)
)


