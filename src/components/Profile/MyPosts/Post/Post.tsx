import React from 'react';
import s from './Post.module.css';
import shareImg from '../../../../assets/images/Share.png'
import likeImg from '../../../../assets/images/like.png'


type propsType = {
    message: string,
    likesCount: number,
    id?: number
}

const Post = (props:propsType) => {
    const share = {
        color: 'blue',
        backgroundImage: 'url(' + shareImg + ')',

    };
    const like = {
        color: 'blue',
        backgroundImage: 'url(' + likeImg + ')',
    };
    return (
        <div className={s.item}>
            <div>
            <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
            <span className={s.postName}> Andrei Kulik</span>
            </div>
            <p> {props.message} </p>
            <div className={s.likeBtns}>
                <div style={share} className={s.share}></div><span className={s.likeCount}>4</span>
                <div className={s.like} style={like}></div><span className={s.likeCount}>{props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;