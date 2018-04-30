import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCES,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChange = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChange = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return dispatch => {
        dispatch({ type: LOGIN_USER });
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(error => {
                console.log('error', error);
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};
const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCES, payload: user });
    Actions.main();
};

const loginUserFail = dispatch => {
    dispatch({ type: LOGIN_USER_FAIL });
};
