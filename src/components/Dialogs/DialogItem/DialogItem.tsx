import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
// import {PropsType} from '../../../App'
import {DialogsDataType, MessagesDataType, PostDataType} from "../../../index";

type PropsType = {
    dialogsdata: Array<DialogsDataType>,
    messagesdata: Array<MessagesDataType>
}

const DialogItem = (props:PropsType) => {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={'/dialogs/'+ props.dialogsdata.id}>{props.dialogsdata.name}</NavLink>
        </div>
    )
}



export default DialogItem