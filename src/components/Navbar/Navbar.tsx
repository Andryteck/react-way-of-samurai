import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {SideBarNameType} from '../../redux/sidebar-reducer';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {FriendsType} from "../../redux/navbar-reducer";


const Navbar = () => {

    // let sideBar = props.state.sidebar.map(item => <Friends name={item.name}/>)
    let friends = useSelector<RootState, Array<FriendsType>>(state => state.navbar)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friendsContainer}>
                <h2>Friends</h2>
                <div className={s.friendsItem}>
                    {friends.map(f => <Friends name={f.name}/>)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar