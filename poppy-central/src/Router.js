// imports
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// pages
import Home from "./views/Home/index"
import SpecialProjects from "./views/SpecialProjects/index"
import CompletedProjects from "./views/CompletedProjects/index"
import SignerChanges from "./components/SignerChanges/index"
import InputSignerData from "./components/InputSignerData/index"

export default () => (
	<Router>
		<Route path="/" exact component={Home} />
		<Route path="/app-main/omg" exact component={SpecialProjects} />
		<Route path="/app-main/SignerChanges" exact component={SignerChanges} />
		<Route
			path="/app-main/completedproject"
			exact
			component={CompletedProjects}
		/>
		<Route path="/app-main/InputSignerData" exact component={InputSignerData} />
	</Router>
)
