import React, {useRef} from 'react';
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>,
    newPostText: string,
    dispatch: (action: any) => void
}

export const MyPosts = ({posts, ...props}: MyPostsPropsType) => {
    const postsElement =
        posts.map(m => <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    const ref = useRef<HTMLInputElement>(null);

    const addPost = () => {
            props.dispatch({type: 'ADD-POST'})
        }
    const onPostChange = () => {
        if (ref.current !== null) {
            let textFromInput = ref.current.value
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', textFromInput})
        }
    }
    return (
        <div className={styles.content}>
            <h3>My posts</h3>
            <div>
                <input autoFocus type="text" ref={ref} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>
    );
};
