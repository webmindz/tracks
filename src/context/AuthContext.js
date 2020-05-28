//movie 197

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';

const authReducer = (state, action) => {
    switch (action.type){
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'signout':
            return {errorMessage: '', token: null};
        case 'add_error':
            return {...state, errorMessage: action.payload };
        default:
            return state;
    };
};

const clearErrorMessage = dispatch => {
     return () => { dispatch({ type: 'clear_error_message'}) }
};


const signup = dispatch => {
    return async ({email, password }) => {
        try {
            const response = await trackerApi.post('/signup',{email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
        } catch(err){
            dispatch({ type: 'add_error', payload: 'Something went wrong while signing up.'});
        };
    };
};


const signin = dispatch => {
    return async ({email, password }) => {
        try {
            const response = await trackerApi.post('/signin',{email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
        } catch(err){
            dispatch({ type: 'add_error', payload: 'Something went wrong while signing in.'});
        };
    };
};

const tryLocalSignin = dispatch => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if (token){
            dispatch({type: 'signin', payload: token});
        };
    };
};


const signout = dispatch => {
    return async () => {
        // make API request to sign out
        try {
            await AsyncStorage.removeItem('token');
            dispatch({type: 'signout'});
        } catch(err){
            dispatch({ type: 'add_error', payload: 'Something went wrong while signing out.'});
        };
    };
};


export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signup, signout, clearErrorMessage, tryLocalSignin }, //clearErrorMessage
    {token: null, errorMessage: ''}
);