import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store-redux';


const renderTheWholeThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


renderTheWholeThree(store.state);
store.subscribe(renderTheWholeThree);