import {act} from "react-dom/test-utils";

const FOLLOW: string = 'FOLLOW'
const UNFOLLOW: string = 'UNFOLLOW'
const SET_USERS: string = 'SET_USERS'
const SET_CURRENT_PAGE: string = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT: string = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type UserType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }

}


let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, //[...state.users ]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, //[...state.users ]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userId: number) => ({
    type: FOLLOW, userId
})

export const unfollow = (userId: number) => ({
    type: UNFOLLOW, userId
})
export const setUsers = (users: any) => ({
    type: SET_USERS, users
})
export const setCurrentPage = (currentPage:number) => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const setTotalUserCount = (totalUsersCount:number) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
})
export const setIsFetching = (isFetching:boolean) => ({
    type: TOGGLE_IS_FETCHING, isFetching: isFetching
})
