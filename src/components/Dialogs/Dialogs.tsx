import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    onSendMessage: () => void,
    onNewMessageChange: (body: string) => void,
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage
    const dialogsElements = state.dialogs.map(d => <DialogItem userID={d.id} userName={d.name} key={d.id}/>)
    const messagesElements = state.messages.map(m => <Message dialogText={m.message} key={m.id}/>)
    const newMessageBody = state.newMessageBody
    const onSendMessage = () => {
        props.onSendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.onNewMessageChange(body)
    }
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.usersWrapper}>
                <div>{dialogsElements}</div>
            </div>
            <div className={styles.messagesBlock}>
                <div className={styles.messageWrapper}>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message..."/></div>
                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
