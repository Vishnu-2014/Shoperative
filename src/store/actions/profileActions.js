import axios from 'axios';
import {baseURL} from '../../utils/Constants';
export const PROFILE_STARTED = 'profile:PROFILE_STARTED';
export const PROFILE_SUCCESS = 'profile:PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'profile:PROFILE_FAILURE';
import {useSelector} from 'react-redux';

export const profile = Token => {
  return async (dispatch, getState) => {
    const loginResult = useSelector(state => state.login);
    dispatch({type: PROFILE_STARTED});
    const url = `${baseURL}/profile`;
    try {
      const result = await axios({
        method: 'get',
        url,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${Token}`,
        },
      });
      if (result.status === 200) {
        dispatch({type: PROFILE_SUCCESS, payload: result.data});
      } else {
        dispatch({type: PROFILE_FAILURE});
      }
    } catch (e) {
      console.log('the error', e);
    }
  };
};
