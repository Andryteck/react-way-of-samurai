import {profileAPI, usersAPI} from "../api/Api";
import {InferActionTypes} from "./redux-store";


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
    status: '',

}


const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 2
            }
            return {
                ...state,
                postData: [...state.postData, newPost],

            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'SAVE_PHOTO_SUCCESS' :
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        default:
            return state
    }

}

// Actions
type ActionType = InferActionTypes<typeof actions>


export const actions = {
    addPostActionCreator: (newPostText: string) => ({
        type: 'ADD_POST', newPostText
    } as const),

    setUserProfile: (profile: any) => ({
        type: 'SET_USER_PROFILE', profile: profile
    } as const),
    setStatus: (status: string) => ({
        type: 'SET_STATUS', status
    } as const),
    savePhotoSuccess: (photos: any) => ({
        type: 'SAVE_PHOTO_SUCCESS', photos
    } as const)
}
// Thunk
export let getUserProfile = (userId: number) => (dispatch: Function) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(actions.setUserProfile(response.data))
    })
}
export let getStatus = (userId: number) => (dispatch: Function) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(actions.setStatus(response.data))
    })
}
export let updateStatus = (status: string) => async (dispatch: Function) => {
    try {
        let res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(actions.setStatus(status))
        }
    }
    catch (e) {
        
    }
}
export let savePhoto = (file: any) => async (dispatch: Function) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(response.data.data.photos))
    }

}


export default profileReducer