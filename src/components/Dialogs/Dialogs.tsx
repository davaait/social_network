import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../redux/store";
import axios from "axios";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void,
    updateNewMessageBody: (body: string) => void,
}

export const Dialogs = ({dialogsPage, sendMessage, updateNewMessageBody, ...props}: DialogsPropsType) => {
    const dialogsElements = dialogsPage.dialogs.map((d:any) => <DialogItem userID={d.id} userName={d.name} key={d.id}/>)
    const messagesElements = dialogsPage.messages.map((m:any) => <Message dialogText={m.message} key={m.id}/>)
    const newMessageBody = dialogsPage.newMessageBody
    const onSendMessage = () => {
        sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageBody(e.currentTarget.value)
    }

    const getUsers = async () => {
        const {data} = await axios.get('https://social-network.samuraijs.com/api/1.0/users')
        console.log(data)
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
