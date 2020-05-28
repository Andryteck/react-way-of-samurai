import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootState} from "../../../redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: RootState) => {
    return {
        postData: state.profilePage,
        newPostText: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        updateNewPostText: (text: string) => {
            debugger
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;