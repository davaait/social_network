import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}

export const Dialogs = ({dialogs, messages, ...props}: DialogsPropsType) => {
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.usersWrapper}>
                <DialogItem userID={dialogs[0].id} userName={dialogs[0].name}/>
                <DialogItem userID={dialogs[1].id} userName={dialogs[1].name}/>
                <DialogItem userID={dialogs[2].id} userName={dialogs[2].name}/>
                <DialogItem userID={dialogs[3].id} userName={dialogs[3].name}/>
                <DialogItem userID={dialogs[4].id} userName={dialogs[4].name}/>
                <DialogItem userID={dialogs[5].id} userName={dialogs[5].name}/>
            </div>
            <div className={styles.messageWrapper}>
                <Message dialogText={messages[0].message}/>
                <Message dialogText={messages[1].message}/>
                <Message dialogText={messages[2].message}/>
                <Message dialogText={messages[3].message}/>
                <Message dialogText={messages[4].message}/>
            </div>
        </div>
    );
};
