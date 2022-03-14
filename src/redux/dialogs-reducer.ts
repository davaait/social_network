import {StateType} from "./state";

export const dialogsReducer = (state: StateType, action: any) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            state.messagesPage.newMessageBody = action.body
            return state
        }
        case 'SEND-MESSAGE': {
            let body = state.messagesPage.newMessageBody
            state.messagesPage.newMessageBody = ''
            state.messagesPage.messages.push({id: 6, message: body})
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
