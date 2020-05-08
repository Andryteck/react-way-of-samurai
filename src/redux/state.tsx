export type PostDataType = {
    id?: number,
    message?: string,
    likesCount?: number
}

export type DialogsDataType = {
    id: number,
    name: string
}

export type MessagesDataType = {
    id?: number,
    message?: string
}

export type ProfilePageType = {
    postData: Array<PostDataType>,
    dialogData: Array<DialogsDataType>
}

export type MessagesPageType = {
    messagesData: Array<MessagesDataType>
}
export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType

}


let state: StateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'hi', likesCount: 12},
            {id: 2, message: 'its my first post', likesCount: 13},
            {id: 3, message: 'its my second post', likesCount: 14},
            {id: 4, message: 'its my three post', likesCount: 15}
        ],
        dialogData: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrei'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sacha'}
        ]
    },
    messagesPage: {
        messagesData:
            [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'yoyoyo'},
                {id: 3, message: 'Wai'},
                {id: 4, message: 'yoyoyooyoy'}
            ]
    }
}

export default state
// postData: Array<PostDataType>,
//     dialogData: Array<DialogsDataType>,
//     messagesData: Array<MessagesDataType>