import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostDataType} from "../../../index";


export type PropsType = {
    postdata: Array<PostDataType>
}

const MyPosts = (props:PropsType) => {

   let postElement =
       props.postdata.map(post => <Post message={post.message} likesCount = {post.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                 <textarea></textarea>
                </div>
                <div>
                 <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )

}

export default MyPosts;