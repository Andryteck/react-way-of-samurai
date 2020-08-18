import React, {useState} from 'react';
import s from './Post.module.css';
import shareImg from '../../../../assets/images/Share.png'
import likeImg from '../../../../assets/images/like.png'
import avaImg from '../../../../assets/images/ava-small.jpg'
import likeImgColored from '../../../../assets/images/likeImgColored.png'
import {useDispatch} from "react-redux";
import {actions} from "../../../../redux/profile-reducer";


type propsType = {
    message: string | undefined,
    likesCount: number,
    postId: number | undefined
    isRed: boolean
}

const Post = (props: propsType) => {
    const dispatch = useDispatch()
    let [colored, setColored] = useState<boolean>(true)
    const share = {
        color: 'blue',
        backgroundImage: 'url(' + shareImg + ')',
    };
    const likeRegular = {
        color: 'blue',
        backgroundImage: 'url(' + likeImg + ')',
    };
    const likeColored = {
        color: 'blue',
        backgroundImage: 'url(' + likeImgColored + ')',

    };
    const ava = {
        color: 'blue',
        backgroundImage: 'url(' + avaImg + ')',

    };
    const onClickHandler = () => {
        dispatch(actions.postCountAC(props.postId, props.likesCount,props.isRed))
        setColored(false)
    }
    return (
        <div className={s.item}>
            <div>
                <img style={ava}/>
                <span className={s.postName}> Andrei Kulik</span>
            </div>
            <p className={s.postMessage}> {props.message} </p>
            <div className={s.likeBtns}>
                <div style={share} className={s.share}></div>
                <span className={s.likeCount}>4</span>
                <div className={s.like} style={props.isRed ? likeColored : likeRegular} onClick={onClickHandler}></div>
                <span className={s.likeCount}>{props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;