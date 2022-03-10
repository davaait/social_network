import React from 'react';
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={styles.content}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={styles.posts}>
                <Post title='post 1'/>
                <Post title='post 2'/>
                <Post title='post 3'/>
            </div>
        </div>
    );
};
