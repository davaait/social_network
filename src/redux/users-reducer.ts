import {GenerealACType} from "./store";

enum UsersTypeValue {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: {small?: string, large?: string}
    followed: boolean
}

export type initialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

const initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 2,
}

export const usersReducer = (state: initialStateType = initialState, action: GenerealACType): initialStateType => {
    switch (action.type) {
        case UsersTypeValue.FOLLOW:
            return <initialStateType>{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return state;
                })
            }
        case UsersTypeValue.UNFOLLOW:
            return <initialStateType>{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return state;
                })
            }
        case UsersTypeValue.SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case UsersTypeValue.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: UsersTypeValue.FOLLOW,
        userId,
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UsersTypeValue.UNFOLLOW,
        userId,
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: UsersTypeValue.SET_USERS,
        users,
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: UsersTypeValue.SET_CURRENT_PAGE,
        currentPage,
    } as const
}
