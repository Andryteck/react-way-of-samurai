import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
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
        addPost: (values:string) => {
            dispatch(addPostActionCreator(values))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;