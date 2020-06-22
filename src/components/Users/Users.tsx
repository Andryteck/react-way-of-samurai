import React from 'react';
import styles from './users.module.css'
import userImage from '../../assets/images/user.jpg'
import {NavLink} from 'react-router-dom';


type PropsType = {
    users: Array<any>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    // setUserPage: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    followingInProgress: Array<any>
}

const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map((p: number) => <button onClick={(e) => {
                            props.onPageChanged(p)
                        }} className={props.currentPage === p ? styles.selectedPage : ''}>{p}</button>
                    )}

            </div>

            {
                props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'./profile/' + u.id}>
                            <img className={styles.usersPhoto}
                                 src={u.photos.small !== null ? u.photos.small : userImage}/>
                                  </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                              // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                              //     withCredentials: true,
                                              //     headers: {
                                              //         'API-KEY': '18300c65-a005-4e58-817e-a7be6c453c64'
                                              //     }
                                              // })
                                          }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                              // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                              //     withCredentials: true,
                                              //     headers: {
                                              //         'API-KEY': '18300c65-a005-4e58-817e-a7be6c453c64'
                                              //     }
                                              // })
                                          }}
                                >Follow</button>}

                                </div>
                                </span>
                    <span>
                                <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                </span>
                                <span>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.city'}</div>
                                </span>
                                </span>
                </div>)
            }
        </div>
    )
}

export default Users