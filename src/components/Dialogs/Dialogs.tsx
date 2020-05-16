import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import { StateType } from '../../redux/store';


export type PropsType = {
    state: StateType
    dispatch: Function

}

const Dialogs = (props: PropsType) => {

    let dialogElement = props.state.messagesPage.dialogData.map(dialog => <DialogItem name={dialog.name}
                                                                                      id={dialog.id}/>)
    let messagesElement = props.state.messagesPage.messagesData.map(message => <Message message={message.message}/>)
    let newMessageBody = props.state.messagesPage.newMessageBody
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>  {messagesElement} </div>
                <div>
                    <div>
                        <div>
                            <textarea value={newMessageBody}
                                      onChange={onNewMessageChange}
                                      placeholder={'enter you message'}>
                            </textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs