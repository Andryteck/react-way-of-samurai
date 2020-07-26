import React from 'react';
import s from './Post.module.css';
import shareImg from '../../../../assets/images/Share.png'
import likeImg from '../../../../assets/images/like.png'
import avaImg from '../../../../assets/images/ava-small.jpg'


type propsType = {
    message: string,
    likesCount: number,
    id?: number
}

const Post = (props: propsType) => {
    const share = {
        color: 'blue',
        backgroundImage: 'url(' + shareImg + ')',

    };
    const like = {
        color: 'blue',
        backgroundImage: 'url(' + likeImg + ')',
    };
    const ava = {
        color: 'blue',
        backgroundImage: 'url(' + avaImg + ')',

    };
    return (
        <div className={s.item}>
            <div>
                <img style={ava}/>
                <span className={s.postName}> Andrei Kulik</span>
            </div>
            <p> {props.message} </p>
            <div className={s.likeBtns}>
                <div style={share} className={s.share}></div>
                <span className={s.likeCount}>4</span>
                <div className={s.like} style={like}></div>
                <span className={s.likeCount}>{props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;