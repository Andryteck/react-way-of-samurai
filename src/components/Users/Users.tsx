import React from 'react';
import styles from './users.module.css'
import userImage from '../../assets/images/user.jpg'


type PropsType = {
    users: Array<any>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    // setUserPage: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged:(p:number) => void

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
                            <img className={styles.usersPhoto}
                                 src={u.photos.small !== null ? u.photos.small : userImage}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}

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