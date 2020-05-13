import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType, ProfilePageType} from "../../redux/state";



export type PropsType = {
    profilePage: ProfilePageType
    addPost:Function
    updateNewPostText:Function
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postdata={props.profilePage.postData}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
            />
        </div>


    )

}

export default Profile
