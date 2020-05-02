import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type PostDataType = {
    id?: number,
    message?: string,
    likesCount?: number
}

export type DialogsDataType = {
    id?: number,
    name?: string
}

export type MessagesDataType = {
    id?: number,
    message?: string
}

let postData:Array<PostDataType> = [
    {id: 1, message: 'hi', likesCount: 12},
    {id: 2, message: 'its my first post', likesCount: 13},
    {id: 3, message: 'its my second post', likesCount: 14},
    {id: 4, message: 'its my three post', likesCount: 15}
]

let dialogsData:Array<DialogsDataType> = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrei'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sacha'}
]

let messagesData:Array<MessagesDataType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'yoyoyo'},
    {id: 3, message: 'Wai'},
    {id: 4, message: 'yoyoyooyoy'}
]


ReactDOM.render(
  <React.StrictMode>
    <App postdata = {postData} dialogsdata = {dialogsData} messagesdata = {messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
