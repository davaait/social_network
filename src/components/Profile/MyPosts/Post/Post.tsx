import React from 'react';
import styles from './Post.module.css'

type PostPropsType = {
    title: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={styles.postWrapper}>
            <img src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"/>
            <div className={styles.item}>{props.title}</div>
            <span>like</span>
        </div>
    );
};
