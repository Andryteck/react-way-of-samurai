import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {PostDataType} from "./index";
import {DialogsDataType} from "./index";
import  {MessagesDataType} from "./index";

export type PropsType = {
    postdata:Array<PostDataType>,
    dialogsdata: Array<DialogsDataType>,
    messagesdata: Array<MessagesDataType>
}



const App = (props:PropsType) => {
debugger

    return (
        <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className={'app-wrapper-content'}>
                <Route path='/profile' render ={ () => <Profile postdata={props.postdata} />}/>
                <Route path='/dialogs' render={ () => <Dialogs dialogsdata={props.dialogsdata} messagesdata={props.messagesdata} />}/>
                <Route path='/news' render={ () => <News />}/>
                <Route path='/music' render={ () => <Music />}/>
                <Route path='/settings' render={ () => <Settings />}/>
            </div>
        </div>
            </BrowserRouter>)
}

export default App