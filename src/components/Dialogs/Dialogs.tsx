import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType, store} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType,
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem userID={d.id} userName={d.name} key={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message dialogText={m.message} key={m.id}/>)
    const newMessageBody = props.dialogsPage.newMessageBody
    const onSendMessage = () => {
        store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        store.dispatch(updateNewMessageBodyAC(body))
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
