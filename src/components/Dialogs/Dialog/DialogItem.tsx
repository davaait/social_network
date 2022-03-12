import React from "react";
import styles from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    userID: number,
    userName: string
}

export const DialogItem = ({userID, userName, ...props}: DialogPropsType) => {
    return (
        <div className={styles.dialogItem}>
            <img
                src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"/>
            <NavLink to={"/dialogs/" + userID}
                     className={navData => navData.isActive ? styles.active : styles.itemUser}>{userName}</NavLink>
        </div>
    )
}
