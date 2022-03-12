import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostsType>,
    addPost: (textFromInput: string) => void
}

export const Profile = ({posts, ...props}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={props.addPost}/>
        </div>
    );
};
