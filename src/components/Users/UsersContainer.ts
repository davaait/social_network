import React, {MouseEventHandler} from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    usersPage: initialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (user: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => MouseEventHandler<HTMLSpanElement> | undefined,
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return <mapDispatchToPropsType>{
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<any>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
