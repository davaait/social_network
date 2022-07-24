import {GenerealACType, ProfilePageType} from "./store";

enum ProfileType {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 23},
        {id: 3, message: 'You need to integrate Redux!', likesCount: 2},
        {id: 4, message: 'BlaBla', likesCount: 4},
    ],
    newPostText: 'it-kamasutra.com',
}

export const profileReducer = (state: ProfilePageType = initialState, action: GenerealACType) => {
    switch (action.type) {
        case ProfileType.ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case ProfileType.UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.textFromInput
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const updateNewPostTextAC = (textFromInput: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        textFromInput: textFromInput
    } as const
}
