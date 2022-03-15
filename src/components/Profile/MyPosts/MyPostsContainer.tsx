import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {GenerealACType, PostsType} from "../../../redux/store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    newPostText: string,
    posts: Array<PostsType>,
}

type mapDispatchToPropsType = {
    onPostChange: (textFromInput: string) => void,
    addPost: () => void,
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType=> {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onPostChange: (textFromInput: string) => {
            dispatch(updateNewPostTextAC(textFromInput))
        },
        addPost: () => {
            dispatch(addPostAC())
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
