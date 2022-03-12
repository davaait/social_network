import React, {useRef} from 'react';
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>,
    addPost: (textFromInput: string) => void
}

export const MyPosts = ({posts, ...props}: MyPostsPropsType) => {
    const postsElement =
        posts.map( m => <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    const ref = useRef<HTMLInputElement>(null);

    const addPost = () => {
        if(ref.current !== null) {
            let textFromInput = ref.current.value
            props.addPost(textFromInput)
            ref.current.value = ''
        }
    }

    return (
        <div className={styles.content}>
            <h3>My posts</h3>
            <div>
                <input autoFocus type="text" ref={ref}/>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>
    );
};
