import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store-redux";
import StoreContext from "./storeContext";

const renderTheWholeThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App store={store}/>
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderTheWholeThree(store.state);
store.subscribe(renderTheWholeThree);
