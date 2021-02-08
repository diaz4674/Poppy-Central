import logo from "../../assets/logo-mobile.svg"
import "./style.css"
import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import HeaderAccountInfo from "../HeaderAccountInfo"

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

class SignerChanges extends Component {
	updateMembers = (member) => {
		console.log(member)
	}
	render() {
		return (
			<div className="container">
				<div className="InputBox">
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
							<img
								src={logo}
								className="logo"
								onClick={() => this.props.history.push("/")}
							/>
						</div>
						<h1 style={{ fontFamily: "Roboto sans-serif", color: "#595a59" }}>
							Information
						</h1>
						<HeaderAccountInfo />
					</div>
				</div>
			</div>
		)
	}
}

export default SignerChanges
