import React from "react";
import Grid from "@material-ui/core/Grid";
import Left from "./Left";
import Right from "./Right";
import "./Body.css";

const Body = () => {
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
};

export default Body;
