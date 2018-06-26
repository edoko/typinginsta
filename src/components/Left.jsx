import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { observer, inject } from "mobx-react";
import domtoimage from "dom-to-image";
import ReactQuill from "react-quill";
import bg from "../img/bg.jpg";
import "react-quill/dist/quill.snow.css";
import "./Left.css";

// 스토어 주입
@inject("store")
@observer
export default class Left extends Component {
  constructor(props) {
    super(props);

    // 해당 컴포넌트에서 사용 할 state 생성
    this.state = {
      head: "",
      story: "",
      writer: ""
    };
  }

  // 각 필드에 입력한 값을 state에 삽입
  handleChange = event => {
    const store = this.props.store;
    store.addHead(event.target.value);

    this.setState({
      head: event.target.value
    });
  };

  handleChange2 = value => {
    const store = this.props.store;
    store.addStory(value);

    this.setState({
      story: value
    });
  };

  handleChange3 = event => {
    const store = this.props.store;
    store.addWriter(event.target.value);

    this.setState({
      writer: event.target.value
    });
  };

  // 생성한 값을 이미지로 저장
  saveImage = () => {
    let node = document.getElementById("result");
    domtoimage
      .toPng(node, {
        // 모바일 해상도가 PC보다 낮으므로 함께 1.5배씩 증가.
        width: node.clientWidth * 1.5,
        height: node.clientHeight * 1.5,
        style: {
          "transform-origin": "top left",
          transform: "scale(1.5)"
        }
      })
      .then(function(dataUrl) {
        var link = document.createElement("a");
        // 파일명은 save.png로 동일하게
        link.download = "save.png";
        link.href = dataUrl;
        link.click();
      });
  };

  // 백그라운드 배경을 자신이 갖고 있는 이미지를 업로드하여 교체
  uploadImage = e => {
    // 이미지가 여러개일 수도 있으니..원래는 1개만!
    const { files } = e.target;

    // 이미지가 없다면!
    if (files.length === 0) {
      return;
    }

    // 이미지 1개만 넣고
    const file = files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      // 백그라운드 이미지 셋팅
      let node = document.getElementById("result");
      node.style.backgroundImage = `url(${fileReader.result})`;
    };
    fileReader.readAsDataURL(file);
  };

  // 기본 배경으로 바꾸기
  setDefaultBg = () => {
    let node = document.getElementById("result");
    node.style.backgroundImage = `url(${bg})`;
  };

  render() {
    return (
      <div className="left">
        <Paper className="r-paper" elevation={4}>
          <form className="form-field" noValidate autoComplete="off">
            <TextField
              label="제목"
              className="txt_header"
              value={this.state.head}
              onChange={this.handleChange}
              margin="normal"
              inputProps={{
                maxLength: 15
              }}
              style={{ width: 200 }}
            />
            <br />
            <div className="editor">
              <ReactQuill
                value={this.state.story}
                onChange={this.handleChange2}
                placeholder="내용을 여기에 입력해주세요."
              />
            </div>
            <TextField
              label="글쓴이"
              className="txt_writer"
              value={this.state.writer}
              onChange={this.handleChange3}
              margin="normal"
              inputProps={{
                maxLength: 10
              }}
            />
            <br />
            <div className="bg">
              배경 선택:&nbsp;
              <input
                accept="image/*"
                className="input_img"
                type="file"
                onChange={e => this.uploadImage(e)}
              />
            </div>
            <div className="btn-bg">
              <Button
                className="btn-defaultbg"
                variant="contained"
                size="small"
                onClick={this.setDefaultBg}
              >
                기본 배경
              </Button>
            </div>
          </form>
          <Button
            className="btn-create"
            variant="contained"
            color="primary"
            onClick={this.handleAction}
          >
            생성
          </Button>
          <Button
            className="btn-save"
            variant="contained"
            color="secondary"
            onClick={this.saveImage}
          >
            저장
          </Button>
        </Paper>
      </div>
    );
  }
}
