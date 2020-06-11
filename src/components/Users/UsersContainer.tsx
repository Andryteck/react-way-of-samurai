import React from 'react';
import {connect} from 'react-redux';
import {RootState} from "../../redux/redux-store";
import {
    followAC,
    setUsersAC,
    unfollowAC,
    UserType,
    setCurrentPageAC,
    setTotalUserCountAC,
    setIsFetchingAC
} from "../../redux/users-reducer";
import axios from "types-axios";
import Users from "./Users";
import PreLoader from '../common/Prelouder/Preloader'



class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)

        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setUserPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
            this.props.toggleIsFetching(false)

        })
    }

    render() {
        return <>
            {this.props.isFetching ? <PreLoader />: null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }

}

const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setUser: (users: any) => {
            dispatch(setUsersAC(users))
        },
        setUserPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


