import axios from 'axios';
import {baseURL} from '../../utils/Constants';
export const LOGIN_STARTED = 'login:LOGIN_STARTED';
export const LOGIN_SUCCESS = 'login:LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'login:LOGIN_FAILURE';
export const UPDATE_USER_DETAILS = 'userDataUpdate:UPDATE_USER_DETAILS';
export const FORGET_PASSWORD_STARTED = 'forgetpassword:FORGET_PASSWORD_STARTED';
export const FORGET_PASSWORD_SUCCESS = 'forgetpassword:FORGET_PASSWORD_SUCCESS';
export const FORGET_PASSWORD_FAILURE = 'forgetpassword:FORGET_PASSWORD_FAILURE';

export const login = (username, password, deviceToken) => {
  return async (dispatch, getState) => {
    dispatch({type: LOGIN_STARTED});
    const url = `${baseURL}/login`;
    //const body =; //{userdata: username, password: password};
    try {
      const result = await axios({
        method: 'post',
        url,
        data: {
          loginusername: username,
          loginpassword: password,
          devicetoken: deviceToken,
        },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        timeout: 30,
        timeoutErrorMessage: 'Network timedOut',
      });
      console.log(result.data);
      if (result.status === 200 || 204) {
        dispatch({type: LOGIN_SUCCESS, payload: result.data});
      } else {
        dispatch({type: LOGIN_FAILURE});
      }
    } catch (e) {
      dispatch({type: LOGIN_FAILURE, error: e.message});
    }
  };
};

export const updateUserDetails = (key, value) => {
  return async (dispatch, getState) => {
    try {
      dispatch({type: UPDATE_USER_DETAILS, payload: {key, value}});
    } catch (e) {
      console.log('the error', e);
    }
  };
};
export const forgetPassword = email => {
  return async (dispatch, getState) => {
    dispatch({type: FORGET_PASSWORD_STARTED});
    const url = `${baseURL}/forgot-password`;
    //const body =; //{userdata: username, password: password};
    try {
      const FPresult = await axios({
        method: 'post',
        url,
        data: {
          email,
        },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      console.log(FPresult.data);
      if (FPresult.data.code === 200 || 204) {
        dispatch({type: FORGET_PASSWORD_SUCCESS, payload: FPresult.data});
      } else {
        dispatch({type: FORGET_PASSWORD_FAILURE});
      }
    } catch (e) {
      console.log('the error', e);
    }
  };
};
