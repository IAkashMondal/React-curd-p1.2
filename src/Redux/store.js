import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { reducer as AppReducer } from "./AppRedux/reudcer"
import { reducer as AuthReducer } from "./AuthRedux/reducer"
import thunk from "redux-thunk"
const RootReducer = combineReducers({AppReducer,AuthReducer})
export const store = legacy_createStore(RootReducer,applyMiddleware(thunk))