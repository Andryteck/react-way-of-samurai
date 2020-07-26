import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {RootState} from "./redux/redux-store";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import PreLoader from "./components/common/Prelouder/Preloader";
import {WithSuspense} from "./hoc/WithSuspence";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


class App extends React.Component <any, any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <PreLoader/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                {this.props.isAuth ? <Navbar/> : null}
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route exact path='/' render={WithSuspense(ProfileContainer)}/>
                        <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>

        )
    }
}

const mstp = (state: RootState) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mstp, {initializeApp}),
    withRouter,
)(App) as React.ComponentClass
