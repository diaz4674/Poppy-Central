import React, { Component } from "react"
import ListItem from "@material-ui/core/ListItem"
import checkmark from "../../assets/check.svg"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import Avatar from "@material-ui/core/Avatar"
import AvatarGroup from "@material-ui/lab/AvatarGroup"
import "./style.css"
import edit from "../../assets/edit.svg"
import { withRouter } from "react-router-dom"

class Signers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleSigners: false,
            TeamMembers: [],
        }
    }

    async componentDidMount() {
        let { savedProject } = this.props.location.state
        let { TeamMembers, accountSigners } = this.props
        await this.setState({
            ...this.state,
            TeamMembers,
            accountSigners,
            savedProject,
        })
    }

    async toggleView(e) {
        e.preventDefault()
        let { history } = this.props
        let state = { ...history.location.state }

        delete state.inputData
        delete state.AccountInfo
        let AccountInfo = this.state

        history.push({
            pathname: "/app-main/InputSignerData",
            state: AccountInfo,
        })
    }
    render() {

        console.log(this.props)
        let { TeamMembers, accountSigners } = this.state
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                {accountSigners === undefined ? (
                    <p>loading</p>
                ) : (
                        <>
                            <div
                                style={{
                                    display: "flex",
                                    alignContent: "center",
                                    justifyContent: "space-between",
                                    width: "90%",
                                }}
                            >
                                <p className="mediumTitle" style={{ color: "#595a59" }}>
                                    Signers:
							</p>
                                {this.props.completed !== undefined ? null : <img
                                    src={edit}
                                    alt="edit"
                                    className="edit"
                                    onClick={(e) => this.toggleView(e)}
                                />}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                }}
                            >
                                {Object.values(accountSigners).map((signer, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img
                                                src={checkmark}
                                                alt="checkmark"
                                                style={{ width: "25px" }}
                                            />
                                            <ListItem>
                                                <ListItemText primary={signer.Name} />
                                                <div className="Line" />
                                            </ListItem>
                                        </div>
                                    )
                                })}
                                {/* <div className="specialBox"> */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <p
                                        className="mediumTitle"
                                        style={{ color: "#595a59", paddingRight: "15px" }}
                                    >
                                        Team Members Involved:
								</p>
                                    <div
                                        onMouseEnter={() =>
                                            this.setState({ ...this.state, toggleSigners: true })
                                        }
                                        onMouseLeave={() =>
                                            this.setState({ ...this.state, toggleSigners: false })
                                        }
                                    >
                                        {this.state.toggleSigners ? (
                                            <div className="teamMemberBox">
                                                <div className="showSigners">
                                                    {TeamMembers.map((member) => {
                                                        return <p>{member.value} </p>
                                                    })}
                                                </div>
                                            </div>
                                        ) : null}
                                        <AvatarGroup max={TeamMembers.length}>
                                            {TeamMembers.map((member, index) => (
                                                <Avatar
                                                    key={index}
                                                    alt={member.value}
                                                // src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                />
                                            ))}
                                        </AvatarGroup>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
            </div>
        )
    }
}

Signers.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles()(Signers))
