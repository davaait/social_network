import React from "react";
import styles from './Message.module.css'

type MessagePropsType = {
    dialogText: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div>{props.dialogText}</div>
    )
}
