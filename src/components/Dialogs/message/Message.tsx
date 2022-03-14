import React from "react";

type MessagePropsType = {
    dialogText: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div>{props.dialogText}</div>
    )
}
