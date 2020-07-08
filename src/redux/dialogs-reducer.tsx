import {DialogsDataType, MessagesDataType} from "./store";

const SEND_MESSAGE: string = 'SEND_MESSAGE';

export type MessagesPageType = {
    messagesData: Array<MessagesDataType>,
    dialogData: Array<DialogsDataType>,
}

let initialState: MessagesPageType = {
    messagesData:
        [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'yoyoyo'},
            {id: 3, message: 'Wai'},
            {id: 4, message: 'yoyoyooyoy'}
        ],
    dialogData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrei'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sacha'}
    ]
}

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {
        //         ...state,
        //         newMessageBody: action.body
        //     }
        // // state.newMessageBody = action.body
        // // return state
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: action.newMessageBody}],
            }

        // let body = state.newMessageBody
        // state.newMessageBody = ''
        // state.messagesData.push({id: 5, message: body})
        // return state
        default :
            return state
    }


}

export let sendMessageCreator = (newMessageBody: string) => ({
    type: SEND_MESSAGE, newMessageBody
})
// export let updateNewMessageBodyCreator = (body: string) => ({
//     type: UPDATE_NEW_MESSAGE_BODY, body: body
// })


export default dialogsReducer