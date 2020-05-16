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
import {PostDataType, StateType} from './redux/store'


type PropsType = {
    state:StateType
    dispatch:Function
}



const App = (props:PropsType) => {

    return (
        <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Navbar state={props.state} />
            <div className={'app-wrapper-content'}>
                <Route path='/profile' render ={ () => <Profile profilePage={props.state.profilePage}
                                                                dispatch={props.dispatch}
                                                                 />}/>
                <Route path='/dialogs' render={ () => <Dialogs state={props.state}
                                                               dispatch={props.dispatch}/>}/>
                <Route path='/news' render={ () => <News />}/>
                <Route path='/music' render={ () => <Music />}/>
                <Route path='/settings' render={ () => <Settings />}/>
            </div>
        </div>
            </BrowserRouter>)
}

export default App