const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export type UserType = {
  id: number
  photoURL: string
  followed: boolean
  fullName: string
  status: string
  location: any
}

export type InitialStateType = {
  users: Array<UserType>
}

let initialState: InitialStateType = {
  users: [],
  // pageSize: 5,
  // totalUsersCount: 0,
  // currentPage: 1,
}

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u=> {
          if(u.id === action.usersId) {
            return {...u, followed: false};
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: [...action.users]}
    }
    // case SET_CURRENT_PAGE: {
    //   return {...state, currentPage: action.currentPage}
    // }
    // case SET_TOTAL_USERS_COUNT: {
    //   return {...state, totalUsersCount: action.count}
    // }
    default:
      return state;
  }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

