import axios from 'axios';
export const LOGIN_STARTED = 'login:LOGIN_STARTED';
export const LOGIN_SUCCESS = 'login:LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'login:LOGIN_FAILURE';

export const login = (username, password) => {
  return async (dispatch, getState) => {
    console.log('the result');
    dispatch({type: LOGIN_STARTED});
    //const body =; //{userdata: username, password: password};
    try {
      const result = await axios({
        method: 'post',
        url: 'https://trp3.com/api/trp_user/login',
        data: {userdata: username, password: password},
        headers: {'Content-Type': 'application/json; charset=utf-8'},
      });

      console.log('the result', result);
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
