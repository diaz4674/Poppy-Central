//imports
import React, { Component } from "react"
import { withRouter } from "react-router-dom"

//assets

//modules
//components
//style
import "./style.css"
import closeIcon from "../../assets/closeIcon.svg"
import Notification from "../../assets/notification.svg"

class Toaster extends Component {
    state = {
        hideToaster: "",
    }
    close() {
        this.setState({ hideToaster: "hideToaster" })
    }
    render() {
        let { hideToaster } = this.state
        return (
            <div className="page Toaster">
                {/* className={`term-dropdown ${this.state.dropdown}`}> */}
                <div className={`Toaster-container ${hideToaster} `}>
                    <div className="iconContainer ">
                        <img
                            src={closeIcon}
                            alt="close"
                            className="closeIcon"
                            onClick={() => this.close()}
                        />
                    </div>
                    <div
                        className="toasterRow"
                        onClick={() =>
                            this.props.history.push({
                                pathname: "/app-main/completedproject",
                                state: { completedProject: this.props.completedProject },
                            })
                        }
                    >
                        <img src={Notification} alt="close" className="Notification" />
                        <p> New Completed Pending Item!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Toaster)
