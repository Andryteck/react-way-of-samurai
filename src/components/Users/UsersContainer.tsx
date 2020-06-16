import React from 'react';
import {connect} from 'react-redux';
import {RootState} from "../../redux/redux-store";
import {follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, setIsFetching
} from "../../redux/users-reducer";
import axios from "types-axios";
import Users from "./Users";
import PreLoader from '../common/Prelouder/Preloader'


class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)

        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setIsFetching(false)

        })
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

// const mapDispatchToProps = (dispatch: Function) => {
//     return {}
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setIsFetching,

}) (UsersContainer)

