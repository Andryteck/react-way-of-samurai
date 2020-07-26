import React, {useState} from 'react';
import styles from './Paginator.module.css'
import cn from 'classnames';


type PropsType = {
    // setUserPage: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
}

const Paginator = (props: PropsType, {portionSize = 10}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p: number) => <button onClick={(e) => {
                            props.onPageChanged(p)
                            }} className={props.currentPage === p ? styles.selectedPage : styles.pageNumber}>{p}</button>
                    )}
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}

        </div>

    )
}

export default Paginator