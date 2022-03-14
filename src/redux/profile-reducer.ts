import {StateType, store} from "./state";

export const profileReducer = (state: StateType, action: any) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.profilePage.newPostText,
                likesCount: 0
            }
            state.profilePage.posts.push(newPost)
            state.profilePage.newPostText = ''
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.profilePage.newPostText = action.textFromInput
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
