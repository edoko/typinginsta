import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default class Fonts extends Component {
  constructor(props) {
    super(props);

    this.state = { fontname: "" };
  }

  handleChange = event => {
    this.setState({ fontname: event.target.value });
  };

  // 렌더링 완료되고 컴포넌트 업데이트 되면,
  componentDidUpdate() {
    this.changeFont();
  }

  // 폰트 변경 기능
  changeFont = () => {
    let head = document.getElementById("font_head");
    let story = document.getElementById("font_story");
    let writer = document.getElementById("font_writer");

    if (this.state.fontname === 10) {
      head.style.fontFamily = "Nanum Gothic, sans-serif";
      story.style.fontFamily = "Nanum Gothic, sans-serif";
      writer.style.fontFamily = "Nanum Gothic, sans-serif";
    } else if (this.state.fontname === 20) {
      head.style.fontFamily = "Nanum Barun Gothic, sans-serif";
      story.style.fontFamily = "Nanum Barun Gothic, sans-serif";
      writer.style.fontFamily = "Nanum Barun Gothic, sans-serif";
    } else if (this.state.fontname === 30) {
      head.style.fontFamily = "NanumSquare, sans-serif";
      story.style.fontFamily = "NanumSquare, sans-serif";
      writer.style.fontFamily = "NanumSquare, sans-serif";
    }
  };

  render() {
    return (
      <FormControl>
        <InputLabel htmlFor="fonts">글씨체</InputLabel>
        <Select
          value={this.state.fontname}
          onChange={this.handleChange}
          inputProps={{
            name: "fonts",
            id: "fonts"
          }}
          style={{ width: 130 }}
        >
          <MenuItem value={10}>나눔고딕(기본)</MenuItem>
          <MenuItem value={20}>나눔바른고딕</MenuItem>
          <MenuItem value={30}>나눔스퀘어</MenuItem>
        </Select>
      </FormControl>
    );
  }
}
