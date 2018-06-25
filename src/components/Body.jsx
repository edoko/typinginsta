import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Left from "./Left";
import Right from "./Right";
import "./Body.css";

export default class Body extends Component {
  render() {
    return (
      <div className="r-body">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Left />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Right />
          </Grid>
        </Grid>
      </div>
    );
  }
}
