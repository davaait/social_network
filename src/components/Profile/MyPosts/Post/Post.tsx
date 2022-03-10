import React from 'react';
import styles from "../MyPosts.module.css";

type PostPropsType = {
    title: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={styles.item}>{props.title}</div>
    );
};
