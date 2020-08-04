import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import LoginImg from '../../assets/icons/login-variant.png'

type PropsType = {
    isAuth: boolean,
    login: string,
    logout: () => void

}
const loginStyle = {
    color: 'blue',
    backgroundImage: 'url(' + LoginImg + ')',
    width: '40px',
    height: '40px',
    display: 'inline-block',
    marginLeft: '85px',

}

const Header = (props: PropsType) => {
    return <header className={s.header}>
        <span>{props.login}</span>
        <div className={s.loginBlock}>
            {/*<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>*/}
            {props.isAuth
                ? <div style={loginStyle} onClick={props.logout}></div>
                : <NavLink to={'/login'}></NavLink>}
        </div>
    </header>
}

export default Header;