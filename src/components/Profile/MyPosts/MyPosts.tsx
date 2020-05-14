import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostDataType} from "../../../redux/state";


export type PropsType = {
    profilePage: {
        postData: Array<PostDataType>,
        newPostText: string
    }
    dispatch: Function

}

const MyPosts = (props: PropsType) => {

    let postElement =
        props.profilePage.postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement: any = React.createRef()

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }
    const onPostChange = () => {
        let text = newPostElement.current.value
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText:text};
        props.dispatch(action)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                 <textarea onChange={onPostChange}
                           ref={newPostElement}
                           value={props.profilePage.newPostText}

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