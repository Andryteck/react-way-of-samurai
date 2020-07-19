import {profileAPI, usersAPI} from "../api/Api";


const ADD_POST: string = 'ADD-POST'
const SET_USER_PROFILE: string = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

type ProfilePageType = {
    postData: Array<PostDataType>
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
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 1
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
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

export let addPostActionCreator = (newPostText:string) => ({
    type: ADD_POST, newPostText
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
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    })
}


export default profileReducer