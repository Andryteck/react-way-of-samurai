import {profileAPI, usersAPI} from "../api/Api";


const ADD_POST: string = 'ADD-POST'
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE: string = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
    profile: any
    status: string
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
    newPostText: 'it-kamasutra',
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

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
export let setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE, profile: profile
})
export let setStatus = (status: string) => ({
    type: SET_STATUS, status
})

export let getUserProfile = (userId: number) => (dispatch: Function) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export let getStatus = (userId: number) => (dispatch: Function) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export let updateStatus = (status: string) => (dispatch: Function) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 1) {
            dispatch(setStatus(response.data))
        }

    })
}


export default profileReducer