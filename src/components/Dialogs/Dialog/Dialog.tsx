import React from "react";
import styles from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    userID: number,
    userName: string
}

export const DialogItem = ({userID, userName, ...props}: DialogPropsType) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + userID}
                     className={navData => navData.isActive ? styles.active : styles.itemUser}>{userName}</NavLink>
        </div>
    )
}
