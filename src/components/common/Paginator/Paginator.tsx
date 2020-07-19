import React from 'react';
import styles from './Paginator.module.css'



type PropsType = {
    // setUserPage: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
}

const Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((p: number) => <button onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? styles.selectedPage : ''}>{p}</button>
                )}

        </div>

    )
}

export default Paginator