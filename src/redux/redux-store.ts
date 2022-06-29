import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {StoreType} from "./store";
import {usersReducer} from "./users-reducer";

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store: StoreType = createStore(rootReducer)
