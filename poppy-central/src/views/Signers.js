import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import checkmark from "./check.svg"
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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
}));

class Signers extends Component {
    render() {
        return (
            <div className="Signers">
                <p className="mediumTitle" style={{ color: "#595a59" }}>Completed Pending Items</p>
                <div className="specialBox">
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <img src={checkmark} alt="checkmark" style={{ width: "25px" }} />
                        <ListItem>
                            <ListItemText primary="Nordby Construction" secondary="Signer Changes" />
                        </ListItem>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <img src={checkmark} alt="checkmark" style={{ width: "25px" }} />
                        <ListItem>
                            <ListItemText primary="Nordby Construction" secondary="Signer Changes" />
                        </ListItem>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <img src={checkmark} alt="checkmark" style={{ width: "25px" }} />
                        <ListItem>
                            <ListItemText primary="Nordby Construction" secondary="Signer Changes" />
                        </ListItem>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <img src={checkmark} alt="checkmark" style={{ width: "25px" }} />
                        <ListItem>
                            <ListItemText primary="Nordby Construction" secondary="Signer Changes" />
                        </ListItem>
                    </div>
                    <div className="Line" />
                </div>
            </div>
        );
    }
}

Signers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Signers);