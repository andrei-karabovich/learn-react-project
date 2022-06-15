import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store-redux";
import {Provider} from "react-redux";

const renderTheWholeThree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderTheWholeThree(store.state);
store.subscribe(renderTheWholeThree);
