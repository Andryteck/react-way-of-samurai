import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {StateType} from "../../redux/state";
import Friends from "./Friends/Friends";

type PropsType = {
    state: StateType
}


const Navbar = (props: PropsType) => {

    let sideBar = props.state.sidebar.map(item => <Friends name={item.name}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
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
                    {sideBar}
                </div>
            </div>
        </nav>
    )
}

export default Navbar