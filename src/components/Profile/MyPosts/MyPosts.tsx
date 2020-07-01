import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator, PostDataType} from "../../../redux/profile-reducer";


export type PropsType = {
    postData: {
        postData: Array<PostDataType>,
        newPostText: string
    }
    // newPostText: string
    updateNewPostText: (text: string) => void,
    addPost: () => void
}


const MyPosts = (props: PropsType) => {
    let postElement =
        props.postData.postData.map((post: any) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement: any = React.createRef()

    const onAddPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        debugger
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
                           value={props.postData.newPostText}

                 />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )

}

export default MyPosts;