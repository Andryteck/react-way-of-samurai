import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {DialogsDataType, MessagesDataType, PostDataType} from "../../index";

export type PropsType = {
    dialogsdata: Array<DialogsDataType>,
    messagesdata: Array<MessagesDataType>
}

const Dialogs = (props:PropsType) => {
debugger


    let dialogElement = props.dialogsdata.map(dialog => <DialogItem name = {dialog.name} id={dialog.id} /> )
    let messagesElement = props.messagesdata.map(message  => <Message message = {message.message} /> )

   return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogElement}
        </div>
        <div className={s.messages}>
            {messagesElement}
        </div>
    </div>
   )
}

export default Dialogs