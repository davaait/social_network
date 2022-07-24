import {DialogsPageType, DialogsType, GenerealACType, MessagesType} from "./store";

enum DialogType {
    UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE = 'SEND-MESSAGE',
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your dog?'},
        {id: 3, message: 'Yo!Yo!Yo!'},
        {id: 4, message: 'They moved to Mexico city'},
        {id: 5, message: 'Yes!'},
    ] as Array<MessagesType>,
    newMessageBody: ""
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: GenerealACType): InitialStateType => {
    switch (action.type) {
        case DialogType.UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case DialogType.SEND_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
