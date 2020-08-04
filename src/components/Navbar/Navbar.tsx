import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {SideBarNameType} from '../../redux/sidebar-reducer';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {FriendsType} from "../../redux/navbar-reducer";
import profileImg from "../../assets/icons/profile.png"
import messageImg from "../../assets/icons/message.png"
import musicImg from "../../assets/icons/music.png"
import newsImg from "../../assets/icons/news.png"
import settingsImg from "../../assets/icons/settings.png"
import friendsImg from "../../assets/icons/friends.png"


const Navbar = () => {

    // let sideBar = props.state.sidebar.map(item => <Friends name={item.name}/>)
    let friends = useSelector<RootState, Array<FriendsType>>(state => state.navbar)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <img src={profileImg} alt="Profile"/>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <img src={messageImg} alt="Profile"/>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item}`}>
                <img src={friendsImg} alt="Profile"/>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <img src={newsImg} alt="Profile"/>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <img src={musicImg} alt="Profile"/>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <img src={settingsImg} alt="Profile"/>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            {/*<div className={s.friendsContainer}>*/}
            {/*    <h2>Friends</h2>*/}
            {/*    <div className={s.friendsItem}>*/}
            {/*        {friends.map(f => <Friends name={f.name}/>)}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </nav>
    )
}

export default Navbar