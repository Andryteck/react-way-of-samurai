import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {DialogsDataType, MessagesDataType, StateType} from "../../redux/state";


export type PropsType = {
    state:StateType


}

const Dialogs = (props: PropsType) => {
debugger

    let dialogElement = props.state.messagesPage.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.state.messagesPage.messagesData.map(message => <Message message={message.message}/>)

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