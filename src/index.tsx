import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, {StateType} from "./redux/state";
import {StoreType} from "./redux/state";


let rerenderEntireTree = (_state:StateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App _state={store._state}
                 dispatch={store.dispatch.bind(store)}
                 // updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
