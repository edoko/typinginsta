import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h1>@TypingInsta</h1>
            <p>
              인스타그램에 맞게끔 자신이 원하는 글을 작성하여 이미지로 저장할 수
              있습니다!
            </p>
            <p>
              <span style={{ fontWeight: 600 }}>만든이: </span> @ko_ma(한끝) /
              <span style={{ fontWeight: 600 }}> 문의: </span>{" "}
              <a
                href="mailto:me@komalab.io"
                style={{ textDecoration: "none", color: "#45ada8" }}
              >
                me@komalab.io
              </a>
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
