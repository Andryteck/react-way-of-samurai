const FOLLOW: string = 'FOLLOW'
const UNFOLLOW: string = 'UNFOLLOW'
const SET_USERS: string = 'SET_USERS'

export type UsersPageType = {
    users: Array<UserType>
}
export type UserType = {
    id: number,
    photoUrl:string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }

}


let initialState: UsersPageType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: "https://images-na.ssl-images-amazon.com/images/I/51AfxBQmFLL._AC_.jpg",
        //     followed: false,
        //     fullName: 'Dmitriy',
        //     status: 'I am a boss',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photoUrl: "https://images-na.ssl-images-amazon.com/images/I/51AfxBQmFLL._AC_.jpg",
        //     followed: true,
        //     fullName: 'Andrei',
        //     status: 'I am a students',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 3,
        //     photoUrl: "https://images-na.ssl-images-amazon.com/images/I/51AfxBQmFLL._AC_.jpg",
        //     followed: true,
        //     fullName: 'Sveta',
        //     status: 'I am awife',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 4,
        //     photoUrl: "https://images-na.ssl-images-amazon.com/images/I/51AfxBQmFLL._AC_.jpg",
        //     followed: true,
        //     fullName: 'Froga',
        //     status: 'I am a Frog',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // }
    ]
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
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({
    type: FOLLOW, userId
})

export const unfollowAC = (userId: number) => ({
    type: UNFOLLOW, userId
})
export const setUsersAC = (users: any) => ({
    type: SET_USERS, users
})