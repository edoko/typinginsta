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
            <h2 id="font_head">{head}</h2>
          </div>
          <div
            id="font_story"
            className="r-story"
            dangerouslySetInnerHTML={{ __html: story }}
          />
          <div className="r-writer">
            <span id="font_writer">{writer}</span>
          </div>
        </div>
      </div>
    );
  }
}
