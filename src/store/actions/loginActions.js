import axios from 'axios';
import {baseURL} from '../../utils/Constants';
export const LOGIN_STARTED = 'login:LOGIN_STARTED';
export const LOGIN_SUCCESS = 'login:LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'login:LOGIN_FAILURE';
export const UPDATE_USER_DETAILS = 'userDataUpdate:UPDATE_USER_DETAILS';

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
        headers: {'Content-Type': 'application/json; charset=utf-8'},
      });
      console.log(result.data);
      if (result.status === 200) {
        dispatch({type: LOGIN_SUCCESS, payload: result.data});
      } else {
        dispatch({type: LOGIN_FAILURE});
      }
    } catch (e) {
      console.log('the error', e);
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
