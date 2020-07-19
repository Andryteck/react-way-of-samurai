import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


type PropsType = {
    users: Array<any>,
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    followingInProgress: Array<any>
    follow: any
    unfollow: any
}

const Users = ({currentPage, ...props}: PropsType) => {
    //
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    return <div>
        {/*<div>*/}
        {/*    {*/}
        {/*        pages.map((p: number) => <button onClick={(e) => {*/}
        {/*                props.onPageChanged(p)*/}
        {/*            }} className={props.currentPage === p ? styles.selectedPage : ''}>{p}</button>*/}
        {/*        )}*/}

        {/*</div>*/}
        <Paginator currentPage={currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}/>
        <div>
            {
                props.users.map((u: any) => <User key={u.id}
                                                  user={u}
                                                  follow={props.follow}
                                                  unfollow={props.unfollow}
                                                  followingInProgress={props.followingInProgress}
                    />
                )
            }
        </div>
    </div>
}

export default Users