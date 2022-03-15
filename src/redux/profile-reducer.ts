import {ProfilePageType} from "./store";

const initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 23},
        {id: 3, message: 'You need to integrate Redux!', likesCount: 2},
        {id: 4, message: 'BlaBla', likesCount: 4},
    ],
    newPostText: 'it-kamasutra.com',
}

export const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.textFromInput
            return state
        }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostTextAC = (textFromInput: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        textFromInput: textFromInput
    } as const
}
