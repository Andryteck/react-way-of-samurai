import React from 'react';
import {connect} from 'react-redux';
import Users from "./Users";
import {RootState} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";


const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUser: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
