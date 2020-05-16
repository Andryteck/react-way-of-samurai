import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType, ProfilePageType} from "../../redux/store";


export type PropsType = {
    profilePage: ProfilePageType
    dispatch: Function
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}

            />
        </div>


    )

}

export default Profile
