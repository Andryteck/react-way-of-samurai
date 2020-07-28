const SEND_MESSAGE: string = 'SEND_MESSAGE';


type DialogsDataType = {
    id: number,
    name: string,
    message: string
}
export type MessagesPageType = {
    dialogData: Array<DialogsDataType>,
}

let initialState: MessagesPageType = {
    dialogData: [
        {id: 1, name: 'Dima', message: 'Hi'},
        {id: 2, name: 'Andrei', message: 'yoyoyo'},
        {id: 3, name: 'Sveta', message: 'Wai'},
        {id: 4, name: 'Sasha', message: 'yoyoyooyoy'}
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
                dialogData: [...state.dialogData, {id: 5, name: 'Anna',message: action.newMessageBody}]
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