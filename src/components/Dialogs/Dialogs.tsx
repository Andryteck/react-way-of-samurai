import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Redirect} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {MessagesPageType,} from '../../redux/dialogs-reducer';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import Textarea from "../common/FormsControls/FormsControls";


export type PropsType = {
    messagesPage: MessagesPageType
    sendMessage: (newMessageBody:string) => void
    isAuth: boolean
}

export const maxLength50 = maxLengthCreator(50)

const Dialogs = (props: PropsType) => {

    let dialogElement = props.messagesPage.dialogData.map(dialog => <DialogItem name={dialog.name}
                                                                                id={dialog.id}/>)
    let messagesElement = props.messagesPage.messagesData.map(message => <Message message={message.message}/>)


    if (!props.isAuth) return <Redirect to={'/login'}/>

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>  {messagesElement} </div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

    const AddMessageForm = (props: any) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={'newMessageBody'} validate={[required,maxLength50]} placeholder={'enter you message'}/>
                </div>
                <div>
                    <button>send</button>
                </div>
            </form>
        )
    }

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)