import logo from "../../assets/logo-mobile.svg"
import "./style.css"
import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Avatar from "@material-ui/core/Avatar"
import AvatarGroup from "@material-ui/lab/AvatarGroup"
import checkmark from "../../assets/check.svg"
import contract from "../../assets/contract.svg"
import Toaster from "../../components/Toaster"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import axios from "axios"

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
        button: {
            margin: theme.spacing(1),
        },
    },
}))

class Home extends Component {
    state = {
        newItem: false,
    }

    async componentDidMount() {
        this.setState({ newItem: true })
        // Spins up server, because heroku takes a while to boot up...
        await axios
            .get("https://poppy-central.herokuapp.com/")
            .then((res) => {
                console.log("Welcome!")
            })
            .catch((err) => {
                console.log(err)
            })

    }

    toggleView(e) {
        this.props.history.push({
            pathname: "/app-main/omg",
            state: { savedProject: e },
        })
    }

    render() {
        return (
            <div className="container">
                <div className="InputBox">
                    <Toaster completedProject={this.props.completed} />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                            justifyContent: "center",
                            width: "100%",
                            margin: "0 0 30px",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img src={logo} className="logo" />
                        </div>
                        <h1 style={{ fontFamily: "Roboto sans-serif", color: "#595a59" }}>
                            Poppy Central
						</h1>
                        <div className="SpecialProjects">
                            <p className="mediumTitle" style={{ color: "#595a59" }}>
                                Create:
							</p>
                            <div className="specialBox">
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "15px",
                                    }}
                                    onClick={() =>
                                        this.props.history.push("/app-main/SignerChanges")
                                    }
                                >
                                    {/* <div className="grayCircle"> */}
                                    <img
                                        src={contract}
                                        alt="checkmark"
                                        style={{ width: "48px" }}
                                    />
                                    {/* </div> */}
                                    <ListItem>
                                        <ListItemText primary="Signer Changes" />
                                    </ListItem>
                                </div>
                                <div className="Line" />
                            </div>
                        </div>
                        <div className="SpecialProjects">
                            <p className="mediumTitle" style={{ color: "#595a59" }}>
                                Saved Projects:
							</p>
                            {this.props.accountInfo.map((project, index) => {
                                return (
                                    <div className="specialBox">
                                        <div
                                            key={index}
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                            onClick={() => this.toggleView(project)}
                                        >
                                            {/* Start of the saved projects  */}
                                            <ListItem>
                                                <ListItemText
                                                    primary={project.ProjectName}
                                                    secondary="Signer Changes"
                                                />
                                            </ListItem>
                                            <AvatarGroup max={project.TeamMembers.length}>
                                                {project.TeamMembers.map((member, index) => {
                                                    return (
                                                        <Avatar
                                                            key={index}
                                                            alt={member.value}
                                                        // src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                        />
                                                    )
                                                })}
                                            </AvatarGroup>
                                            {/* </>
												)
											})} */}
                                        </div>
                                        <div className="Line" />
                                    </div>
                                )
                            })}
                        </div>

                        <div className="SpecialProjects">
                            <p className="mediumTitle" style={{ color: "#595a59" }}>
                                Completed Pending Items
							</p>
                            <div className="specialBox">
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: "/app-main/completedproject",
                                            state: { completedProject: this.props.completed },
                                        })
                                    }
                                >
                                    <img
                                        src={checkmark}
                                        alt="checkmark"
                                        style={{ width: "25px" }}
                                    />
                                    <ListItem>
                                        <ListItemText
                                            primary="Nordby Construction"
                                            secondary="Signer Changes"
                                        />
                                    </ListItem>
                                </div>
                                <div className="Line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accountInfo: state.savedProjects,
        completed: state.Completed
    }
}

export default withRouter(connect(mapStateToProps, {})(Home))
