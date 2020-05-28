


const ADD_POST: string = 'ADD-POST'
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT';


type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}

export type PostDataType = {
    id?: number,
    message?: string,
    likesCount?: number
}

let initialState: ProfilePageType = {

    postData: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'its my first post', likesCount: 13},
        {id: 3, message: 'its my second post', likesCount: 14},
        {id: 4, message: 'its my three post', likesCount: 15}
    ],
    newPostText: 'it-kamasutra'
}


const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            debugger
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 1
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        // state.postData.push(newPost)
        // state.newPostText = ''
        // return state
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        // let copyState = {...state}
        // copyState.postData = {...state.postData}
        // copyState.newPostText = action.newText
        // return copyState
        // state.newPostText = action.newText
        // return state
        default:
            return state
    }


}

export let addPostActionCreator = () => ({
    type: ADD_POST
})
export let updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer