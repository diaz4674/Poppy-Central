// imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import Home from "./views/Home";
import SpecialProjects from "./views/SpecialProjects";
import CompletedProjects from "./views/CompletedProjects"

export default () => (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/app-main/omg" exact component={SpecialProjects} />
        <Route path="/app-main/completedproject" exact component={CompletedProjects} />
    </Router>
);
