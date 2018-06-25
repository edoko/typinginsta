import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store/Store";
import { Provider } from "mobx-react";

// 스토어 삽입
const store = new Store();

ReactDOM.render(
  // mobx-react의 Provider 사용
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
