import {MessagesPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY: string = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE: string = 'SEND_MESSAGE';



let initialState:MessagesPageType = {
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
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            debugger
            return {
                ...state,
             newMessageBody: action.body
            }
            // state.newMessageBody = action.body
            // return state
        case SEND_MESSAGE:
            return  {
                ...state,
                messagesData: [...state.messagesData, {id:100, message: state.newMessageBody}],
                newMessageBody: ''
            }

            // let body = state.newMessageBody
            // state.newMessageBody = ''
            // state.messagesData.push({id: 5, message: body})
            // return state
        default :
            return state
    }


}

export let sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export let updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})


export default dialogsReducer