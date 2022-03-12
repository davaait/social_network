import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: any) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    );
};
