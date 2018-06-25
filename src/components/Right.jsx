import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "./Right.css";

// 스토어 주입
@inject("store")
@observer
export default class Right extends Component {
  render() {
    // 스토어에서 각 props 불러오기 (props는 수정이 불가능하므로 const로 선언)
    const head = this.props.store.head;
    const story = this.props.store.story;
    const writer = this.props.store.writer;

    return (
      <div className="right">
        <div id="result" className="result">
          <div className="r-head">
            <h2>{head}</h2>
          </div>
          <div className="r-story">
            <span>{story}</span>
          </div>
          <div className="r-writer">
            <span>{writer}</span>
          </div>
        </div>
      </div>
    );
  }
}
