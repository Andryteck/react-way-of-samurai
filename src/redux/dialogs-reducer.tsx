import dimych from '../assets/images/dimych.jpg'
import sveta from '../assets/images/sveta.jpg'
import froga from '../assets/images/froga.jpg'
import yoda from '../assets/images/yoda.jpg'

const ava1 = {
    color: 'blue',
    backgroundImage: 'url(' + dimych + ')',

};
const ava2 = {
    color: 'blue',
    backgroundImage: 'url(' + sveta + ')',

};
const ava3 = {
    color: 'blue',
    backgroundImage: 'url(' + froga + ')',

};
const ava4 = {
    color: 'blue',
    backgroundImage: 'url(' + yoda + ')',

};

const SEND_MESSAGE: string = 'SEND_MESSAGE';


type DialogsDataType = {
    id: number,
    name: string,
    message: string,
    ava: any
}
export type MessagesPageType = {
    dialogData: Array<DialogsDataType>,
}

let initialState: MessagesPageType = {
    dialogData: [
        {id: 1, name: 'Dimych', message: 'Тестовое сделал?', ava: ava1},
        {id: 2, name: 'Sveta', message: 'Купи молока', ava: ava2},
        {id: 3, name: 'Froga', message: 'Хозяин я погрызла твой любимый стул(', ava: ava3},
        {id: 4, name: 'Yoda', message: 'МурМяу!', ava: ava4}
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