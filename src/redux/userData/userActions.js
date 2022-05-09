import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes';

export const fetchUserRequest = ()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUserSuccess = users =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
//this is an async action creater. it returns a function. 
//fun dosen't have to be pure, it is allow to have sideEffect such as async api calls. recievs dispatch method as argument
export const fetchUser = ()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        
        .then(response => {
            console.log('response', response);
            const users = response.data
            dispatch(fetchUserSuccess(users))
        }).catch( error => {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
} 