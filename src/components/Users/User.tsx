import React from 'react';
import styles from './users.module.css'
import userImage from '../../assets/images/user.jpg'
import {NavLink} from 'react-router-dom';


type PropsType = {
    user: any
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<any>
}

const User = (props: PropsType) => {
    let u = props.user
    return (
        <div className={styles.userWrapper}>
            <div>
                <NavLink to={'./profile/' + u.id}>
                    <img className={styles.usersPhoto}
                         src={u.photos.small !== null ? u.photos.small : userImage}/>
                </NavLink>
            </div>
            <div className={styles.userName}>{u.name}</div>
            <div>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                              className={styles.unfollowButton}
                              onClick={() => {
                                  props.unfollow(u.id)
                                  // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                  //     withCredentials: true,
                                  //     headers: {
                                  //         'API-KEY': '18300c65-a005-4e58-817e-a7be6c453c64'
                                  //     }
                                  // })
                              }}>&#10003; Followed</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                              className={styles.followButton}
                              onClick={() => {
                                  props.follow(u.id)
                                  // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                  //     withCredentials: true,
                                  //     headers: {
                                  //         'API-KEY': '18300c65-a005-4e58-817e-a7be6c453c64'
                                  //     }
                                  // })
                              }}
                    >&#10010; Follow</button>}

            </div>
        </div>
    )
}

export default User