import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from "../../common/Prelouder/Preloader";

type PropsType = {
    profile:any
}

const ProfileInfo = (props:PropsType) => {
    debugger
    if (!props.profile) {
        return <PreLoader />
    }
    return (
        <div>
        <div>
            <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
        </div>
    <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <span>{props.profile.aboutMe}</span>
    </div>
        </div>

    )
}

export default ProfileInfo