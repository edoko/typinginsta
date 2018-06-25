import { observable, action } from "mobx";

export default class Store {
  // 제목, 내용, 글쓴이의 observable props
  @observable head = "";
  @observable story = "";
  @observable writer = "";

  // 해당 액션 내용
  @action
  addAction(head, story, writer) {
    this.head = head;
    this.story = story;
    this.writer = writer;
  }
}
