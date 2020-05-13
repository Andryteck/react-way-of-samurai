import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostDataType} from "../../../redux/state";


export type PropsType = {
    postdata: Array<PostDataType>
    addPost: Function
    updateNewPostText: Function
    newPostText: string
}

const MyPosts = (props: PropsType) => {

    let postElement =
        props.postdata.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement: any = React.createRef()

    const addPost = () => {
        debugger
        props.addPost()
    }
    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                 <textarea onChange={onPostChange}
                           ref={newPostElement}
                           value={props.newPostText}

                 />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )

}

export default MyPosts;