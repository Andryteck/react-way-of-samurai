import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from "../../common/Prelouder/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type PropsType = {
    profile: any,
    status: string,
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <PreLoader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}

export default ProfileInfo