import axios from 'axios';
import {baseURL} from '../../utils/Constants';
export const REGISTER_STARTED = 'register:REGISTER_STARTED';
export const REGISTER_SUCCESS = 'register:REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'register:REGISTER_FAILURE';

export const register = (
  username,
  mobile,
  email,
  password,
  confirm_password,
  profession,
  monthly_income,
) => {
  return async (dispatch, getState) => {
    dispatch({type: REGISTER_STARTED});
    const url = `${baseURL}/signup`;
    console.log('the url', url);
    //const body =; //{userdata: username, password: password};
    try {
      const result = await axios({
        method: 'post',
        url,
        data: {
          username,
          mobile,
          email,
          password,
          confirm_password,
          profession,
          monthly_income,
        },
        headers: {'Content-Type': 'application/json; charset=utf-8'},
      });
      console.log(result.data);
      if (result.status === 200) {
        dispatch({type: REGISTER_SUCCESS, payload: result.data});
      } else {
        dispatch({type: REGISTER_FAILURE});
      }
    } catch (e) {
      console.log('the error', e);
    }
  };
};
