import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {MessagesPageType, } from '../../redux/dialogs-reducer';


export type PropsType = {
    messagesPage: MessagesPageType
    updateNewMessageBody: (message: string)=> void
    sendMessage: ()=>void
    isAuth: boolean
}

const Dialogs = (props: PropsType) => {

    let dialogElement = props.messagesPage.dialogData.map(dialog => <DialogItem name={dialog.name}
                                                                                      id={dialog.id}/>)
    let messagesElement = props.messagesPage.messagesData.map(message => <Message message={message.message}/>)
    let newMessageBody = props.messagesPage.newMessageBody


    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)

    }
    if (!props.isAuth) return <Redirect to={'/login'} />
    let sendMessage = () => {
        if (newMessageBody) {
            props.sendMessage()
        }
    }
    const onKeyPressHandler = (e:any) => {
        if (e.charCode === 13) {
            props.sendMessage()
        }
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
                                      onKeyPress={onKeyPressHandler}
                                      placeholder={'enter you message'}>
                            </textarea></div>
                        <div>
                            <button onClick={sendMessage}>send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs