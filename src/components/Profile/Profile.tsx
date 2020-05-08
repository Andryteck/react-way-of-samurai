import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";



export type PropsType = {
    postdata: Array<PostDataType>
}

const Profile = (props:PropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postdata = {props.postdata}/>
        </div>


        )

    }

    export default Profile
