import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, usersReducer, UserType} from "./users-reducer";

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

export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

export type UserLocation = {
    city: string
    country: string
}

export type SidebarType = {
    id: number,
    name: string,
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    usersPage: UsersPageType,
    // sidebar: Array<SidebarType>,
}

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: (state: StateType) => void,
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
        usersPage: {
            users: [
                // {
                //     id: 1,
                //     photoURL: '',
                //     followed: true,
                //     fullName: 'Dimych',
                //     status: 'I am a boss',
                //     userLocation: {city: 'Minks', country: 'Belarus'},
                //
                // },
            ],
            currentPage: 1,
            pageSize: 5,
            totalUsersCount: 0,
        },
        // sidebar: [
        //     {id: 1, name: 'John'},
        //     {id: 2, name: 'Will'}
        // ]
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback;
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },
    dispatch(action: GenerealACType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.usersPage = usersReducer(this._state.usersPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebarPage, action)
        this._callSubscriber(this._state)
    },
}

export type GenerealACType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
