import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";

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

export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
    newMessageBody: string,
}

export type SidebarType = {
    id: number,
    name: string,
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: Array<SidebarType>,
}

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: any,
    subscribe: (callback: (state: StateType) => void) => void,
    dispatch: (action: GenerealACType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are you?', likesCount: 23},
                {id: 3, message: 'You need to integrate Redux!', likesCount: 2},
                {id: 4, message: 'BlaBla', likesCount: 4},
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your dog?'},
                {id: 3, message: 'Yo!Yo!Yo!'},
                {id: 4, message: 'They moved to Mexico city'},
                {id: 5, message: 'Yes!'},
            ],
            newMessageBody: ""
        },
        sidebar: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Will'}
        ]
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebarPage, action)
        this._callSubscriber(this._state)
    },
}

export type GenerealACType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>
