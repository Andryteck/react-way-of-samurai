import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from "../../common/Prelouder/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userImage from "../../../assets/images/user.jpg";

type PhotosType = {
    small: string
    large: string
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

type PropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <PreLoader/>
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userImage} className={s.pageAvatar}/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {/*<div>*/}
                {/*    <b>Full name:</b> {props.profile.fullName}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'no' : 'yes'}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <b>About me:</b> {props.profile.aboutMe}*/}
                {/*</div>*/}

            </div>
        </div>

    )
}

export default ProfileInfo