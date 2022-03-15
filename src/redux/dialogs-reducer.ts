import {DialogsPageType, GenerealACType} from "./store";

const initialState = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: GenerealACType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            state.newMessageBody = action.body
            return state
        }
        case 'SEND-MESSAGE': {
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
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
