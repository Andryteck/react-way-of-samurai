import React from 'react';
import {
    sendMessageCreator, updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {RootState} from '../../redux/redux-store';



let mapStateToProps = (state: RootState) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: Function) => {
    return {
        updateNewMessageBody: (message:string) => {
            debugger
            dispatch(updateNewMessageBodyCreator(message))

        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer