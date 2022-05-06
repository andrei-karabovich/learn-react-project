import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


  let conversations = {
    dialogs : [
      {chatId: '1', companyonName: 'Paulina', isActive: true},
      {chatId: '2', companyonName: 'Matthijs', isActive: false},
      {chatId: '3', companyonName: 'Sam', isActive: false},
      {chatId: '4', companyonName: 'Rutger', isActive: false}
    ], 
    messages : [
      {chatId: '1', message: 'Hello'},
      {chatId: '2', message: 'How are you today?'},
      {chatId: '3', message: 'Tell me more'}
    ]
  }

  let posts = [
    {chatId: '1', text: 'Hello', likesCount: 11},
    {chatId: '2', text: 'How are you today?', likesCount: 23},
    {chatId: '3', text: 'Tell me more', likesCount: 14}
  ]


ReactDOM.render(
  <React.StrictMode>
    <App conversations={conversations} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
