// imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import OMG from "./views/OMG";
import SpecialProjects from "./views/SpecialProjects";

export default () => (
    <Router>
        <Route path="/" exact component={SpecialProjects} />
        <Route path="/app-main/omg" exact component={SpecialProjects} />
    </Router>
);
