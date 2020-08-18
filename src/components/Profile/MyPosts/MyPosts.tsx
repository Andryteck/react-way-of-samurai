import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostDataType} from "../../../redux/profile-reducer";
import {reduxForm, Field, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import MyPostTextarea from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

export type PropsType = {
    postData: {
        postData: Array<PostDataType>
    }
    // newPostText: string
    addPost: (values: string) => void

}


const MyPosts = (props: PropsType) => {
    let postElement =
        props.postData.postData.map((post: PostDataType) => <Post message={post.message} likesCount={post.likesCount} key={post.id} postId={post.id} isRed={post.isRed}/>)

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>

            <div>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

function AddNewPostForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={MyPostTextarea} validate={[required, maxLength10]}
                       placeholder={'What’s new'}/>
            </div>
            <div>
                <button className={s.addItemButton}>Add post</button>
            </div>
        </form>
    )
}

const afterSubmit = (result: any, dispatch: Function) =>
    dispatch(reset('ProfileAddNewPostForm'));
let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm', onSubmitSuccess: afterSubmit})(AddNewPostForm)

export default MyPosts;