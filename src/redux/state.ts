import {rerenderEntireTree} from "../render";

export type PostsType = {
    id: number,
    message: string,
    likesCount: number,
}

export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

type ProfilePageType = {
    posts: Array<PostsType>,
    dialogs: Array<DialogsType>,
}

type MessagePageType = {
    messages: Array<MessagesType>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType,
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'How are you?', likesCount: 23},
            {id: 3, message: 'You need to integrate Redux!', likesCount: 2},
            {id: 4, message: 'BlaBla', likesCount: 4},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your dog?'},
            {id: 3, message: 'Yo!Yo!Yo!'},
            {id: 4, message: 'They moved to Mexico city'},
            {id: 5, message: 'Yes!'},
        ],
    },
}

export const addPost = (textFromInput: string) => {
    let newPost = {
        id: 5,
        message: textFromInput,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}
