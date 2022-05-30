import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { default as state, addPost, updateNewPostText, subscribe } from './redux/state';


const renderTheWholeThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


renderTheWholeThree(state);
subscribe(renderTheWholeThree);