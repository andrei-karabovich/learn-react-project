import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';


const renderTheWholeThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


renderTheWholeThree(store.state);
store.subscribe(renderTheWholeThree);