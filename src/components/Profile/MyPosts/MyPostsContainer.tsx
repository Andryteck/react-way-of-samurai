import React from 'react';

import MyPosts from "./MyPosts";
import {RootState} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {actions} from "../../../redux/profile-reducer";

const mapStateToProps = (state: RootState) => {
    return {
        postData: state.profilePage,
        newPostText: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        addPost: (values:string) => {
            dispatch(actions.addPostActionCreator(values))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;