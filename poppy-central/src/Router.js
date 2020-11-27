// imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import Home from "./views/Home";
import SpecialProjects from "./views/SpecialProjects";

export default () => (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/app-main/omg" exact component={SpecialProjects} />
    </Router>
);
