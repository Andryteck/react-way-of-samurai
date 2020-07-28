import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Redirect} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {MessagesPageType,} from '../../redux/dialogs-reducer';
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import MyPostTextarea from "../common/FormsControls/FormsControls";
import avaImg from "../../assets/images/ava-small.jpg";


export type PropsType = {
    messagesPage: MessagesPageType
    sendMessage: (newMessageBody:string) => void
    isAuth: boolean
}

const ava = {
    color: 'blue',
    backgroundImage: 'url(' + avaImg + ')',

};

export const maxLength50 = maxLengthCreator(50)

const Dialogs = (props: PropsType) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogWrapper}>
            {/*<div className={s.dialogs}>*/}
            {/*<div className={s.dialogsItems}>*/}
            {/*    {dialogElement}*/}
            {/*    {messagesElement}*/}
            {/*</div>*/}
            {/*<div className={s.messages}>*/}
            {/*    /!*<div>  {messagesElement} </div>*!/*/}
            {/*</div>*/}
            {/*</div>*/}
            { props.messagesPage.dialogData.map(d => {
            return  <div className={s.item} key={d.id}>
                <div>
                    <img style={ava}/>
                    <DialogItem name={d.name}
                                id={d.id}/>
                </div>
                <p>{d.message}</p>
            </div>
            })
            }
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs

    const AddMessageForm = (props: any) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={MyPostTextarea} name={'newMessageBody'} validate={[required,maxLength50]} placeholder={'enter you message'}/>
                </div>
                <div>
                    <button className={s.sendButton}>send</button>
                </div>
            </form>
        )
    }


const afterSubmit = (result: any, dispatch: Function) =>
    dispatch(reset('dialogAddMessageForm'));
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm',onSubmitSuccess: afterSubmit})(AddMessageForm)