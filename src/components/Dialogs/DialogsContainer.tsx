import React from 'react';
import {
    sendMessageCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {RootState} from '../../redux/redux-store';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';



let mapStateToProps = (state: RootState) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: Function) => {
    return {
        // updateNewMessageBody: (message:string) => {
        //     dispatch(updateNewMessageBodyCreator(message))
        //
        // },
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    )(Dialogs)


