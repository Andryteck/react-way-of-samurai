import {usersAPI} from "../api/Api";

const FOLLOW: string = 'FOLLOW'
const UNFOLLOW: string = 'UNFOLLOW'
const SET_USERS: string = 'SET_USERS'
const SET_CURRENT_PAGE: string = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT: string = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
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
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => ({
    type: FOLLOW, userId
})

export const unfollowSuccess = (userId: number) => ({
    type: UNFOLLOW, userId
})
export const setUsers = (users: any) => ({
    type: SET_USERS, users
})
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const setTotalUserCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
})
export const setIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING, isFetching: isFetching
})
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching
})


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Function) => {

        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Function) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.followUsers(userId)
            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
            //     withCredentials: true,
            //     headers: {
            //         'API-KEY': '18300c65-a005-4e58-817e-a7be6c453c64'
            //     }
            // })
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

export const unfollow = (userId: number) => {

    return (dispatch: Function) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollowUsers(userId)
            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
            //     withCredentials: true,
            //     headers: {
            //         'API-KEY': '18300c65-a005-4e58-817e-a7be6c453c64'
            //     }
            // })
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}