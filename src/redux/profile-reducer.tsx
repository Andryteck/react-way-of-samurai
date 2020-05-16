import {ProfilePageType, StateType} from "./store";


const ADD_POST: string = 'ADD-POST'
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT';



let initialState: ProfilePageType= {

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
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 1
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default :
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