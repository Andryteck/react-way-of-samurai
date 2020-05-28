import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";



export type DialogsDataType = {
    id: number,
    name: string
}

export type MessagesDataType = {
    id?: number,
    message?: string
}

// type ProfilePageType = {
//     postData: Array<PostDataType>
//     newPostText: string
// }

export type SideBarType = {
    name: string
}


export type MessagesPageType = {
    messagesData: Array<MessagesDataType>,
    dialogData: Array<DialogsDataType>,
    newMessageBody: string
}
// export type StateType = {
//     profilePage: ProfilePageType,
//     messagesPage: MessagesPageType,
//     sidebar: Array<SideBarType>
//
// }
// export type StoreType = {
//     state: StateType
//     getState: Function
//     subscribe: Function
//     dispatch: Function
//
// }


// let store: StoreType = {
//     state: {
//         profilePage: {
//             postData: [
//                 {id: 1, message: 'hi', likesCount: 12},
//                 {id: 2, message: 'its my first post', likesCount: 13},
//                 {id: 3, message: 'its my second post', likesCount: 14},
//                 {id: 4, message: 'its my three post', likesCount: 15}
//             ],
//             newPostText: 'it-kamasutra'
//         },
//
//         messagesPage: {
//             messagesData:
//                 [
//                     {id: 1, message: 'Hi'},
//                     {id: 2, message: 'yoyoyo'},
//                     {id: 3, message: 'Wai'},
//                     {id: 4, message: 'yoyoyooyoy'}
//                 ],
//             dialogData: [
//                 {id: 1, name: 'Dima'},
//                 {id: 2, name: 'Andrei'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sacha'}
//             ],
//             newMessageBody: ''
//         },
//         sidebar: [
//             {name: 'Andrew'},
//             {name: 'Sasha'},
//             {name: 'Sveta'}
//         ]
//     },
//     // _callSubscriber() {
//     //     console.log('State changed')
//     // },
//     getState() {
//         return this.state
//     },
//     subscribe(observer: any) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: any) {  // {type: 'ADD-POST'}
//
//         // this._state.profilePage = profileReducer(this._state.profilePage, action)
//         // this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         //
//         // this._callSubscriber(this._state)
//     }
//
//
// }






