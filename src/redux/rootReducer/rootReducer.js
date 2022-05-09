import cakeReducer from "../reducer/cakeReducer";
import iceCreamReducer from "../reducer/iceCreamReducer";
import { combineReducers } from 'redux'
import userReducer from '../userData/userReducer'
//const redux = require('redux')
//const combineReducers = redux.combineReducers

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})
export default rootReducer; 