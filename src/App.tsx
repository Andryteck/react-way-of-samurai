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
import {PostDataType, StateType} from './redux/state'


type PropsType = {
    _state:StateType
    dispatch:Function
}





const App = (props:PropsType) => {
    debugger
    return (
        <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Navbar state={props._state} />
            <div className={'app-wrapper-content'}>
                <Route path='/profile' render ={ () => <Profile profilePage={props._state.profilePage}
                                                                dispatch={props.dispatch}
                                                                 />}/>
                <Route path='/dialogs' render={ () => <Dialogs state={props._state} />}/>
                <Route path='/news' render={ () => <News />}/>
                <Route path='/music' render={ () => <Music />}/>
                <Route path='/settings' render={ () => <Settings />}/>
            </div>
        </div>
            </BrowserRouter>)
}

export default App