import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";

export const Dialogs = (props:any) => {
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.usersWrapper}>
                <DialogItem userID={1} userName='Mike'/>
                <DialogItem userID={2} userName='John'/>
                <DialogItem userID={3} userName='Bill'/>
                <DialogItem userID={4} userName='Richard'/>
                <DialogItem userID={5} userName='Rohn'/>
            </div>
            <div>
                <div>Hi</div>
                <div>Hey</div>
                <div>Hello</div>
            </div>
        </div>
    );
};
