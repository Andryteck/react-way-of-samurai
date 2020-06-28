import React from 'react';
import {connect} from 'react-redux';
import {RootState} from "../../redux/redux-store";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setIsFetching,
    getUsersThunkCreator,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import PreLoader from '../common/Prelouder/Preloader'
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';


class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setIsFetching(true)
        //
        // usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
        //     this.props.setIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUserCount(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <PreLoader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUserCount,
        setIsFetching,
        getUsers: getUsersThunkCreator,
        toggleFollowingProgress
    })
)(UsersContainer)


