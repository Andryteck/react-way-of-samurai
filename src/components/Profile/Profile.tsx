import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootState} from "../../redux/redux-store";


// export type PropsType = {
//     store: {
//         state:RootState
//         dispatch:Function
//     }
// }

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>


    )

}

export default Profile
