import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleWare from 'redux-thunk'
import appReducer from './appReducer'
import newsReducer from './newsReducer'

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer,
   usersPage: usersReducer,
   auth: authReducer,
   newsPage: newsReducer,
   app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))
window.store = store
export default store
