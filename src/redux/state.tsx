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
    postData: Array<PostDataType>
    newPostText: string
}

export type SideBarType = {
    name: string
}


export type MessagesPageType = {
    messagesData: Array<MessagesDataType>,
    dialogData: Array<DialogsDataType>,
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType,
    sidebar: Array<SideBarType>

}
export type StoreType = {
    _state: StateType
    addPost: Function
    updateNewPostText: Function
    getState: Function
    _callSubscriber: Function
    subscribe: Function
    dispatch: Function

}

let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'hi', likesCount: 12},
                {id: 2, message: 'its my first post', likesCount: 13},
                {id: 3, message: 'its my second post', likesCount: 14},
                {id: 4, message: 'its my three post', likesCount: 15}
            ],
            newPostText: 'it-kamasutra'
        },

        messagesPage: {
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
        },
        sidebar: [
            {name: 'Andrew'},
            {name: 'Sasha'},
            {name: 'Sveta'}
        ]
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action:any) {  // {type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 1
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

    }


}


export default store


