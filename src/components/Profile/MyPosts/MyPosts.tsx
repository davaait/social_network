import React from 'react';
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={styles.content}>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={styles.posts}>
                <Post title='Hi! How are you?'/>
                <Post title='Need to integrate Typescript'/>
            </div>
        </div>
    );
};
