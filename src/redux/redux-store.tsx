import {createStore, combineReducers} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StoreType} from "./store";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer
})
export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers)


export default store

