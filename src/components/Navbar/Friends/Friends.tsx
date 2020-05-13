import React from 'react';
import s from '../Friends/Friends.module.css'

type PropsType = {
    name: string
}

const Friends = (props: PropsType) => {
    return (
        <div className={s.itemContainer}>
            <span className={s.circle}></span>
            <span>{props.name}</span>
        </div>
    )
}

export default Friends