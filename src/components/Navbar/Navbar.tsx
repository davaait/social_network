import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
            <nav className={styles.nav}>
                <div>
                    <NavLink to="/profile" className={ navData => navData.isActive ? styles.active : styles.item}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className={ navData => navData.isActive ? styles.active : styles.item}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/news" className={ navData => navData.isActive ? styles.active : styles.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" className={ navData => navData.isActive ? styles.active : styles.item}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" className={ navData => navData.isActive ? styles.active : styles.item}>Settings</NavLink>
                </div>
            </nav>
    );
};
