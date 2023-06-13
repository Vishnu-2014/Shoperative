/* eslint-disable prettier/prettier */
import axios from 'axios';
import {baseURL} from '../../utils/Constants';
export const PROFESSION_LIST_STARTED = 'professionList:PROFESSION_LIST_STARTED';
export const PROFESSION_LIST_SUCCESS = 'professionList:PROFESSION_LIST_SUCCESS';
export const PROFESSION_LIST_FAILURE = 'professionList:PROFESSION_LIST_FAILURE';

export const professionList = () => {
  return async (dispatch, getState) => {
    dispatch({type: PROFESSION_LIST_STARTED});
    const url = `${baseURL}/professionlist`;
    try {
      const result = await axios({
        method: 'get',
        url,
        // headers: {
        //   'Content-Type': 'application/json; charset=utf-8',
        // },
      });
      console.log(result.data);
      if (result.status === 200) {
        dispatch({type: PROFESSION_LIST_SUCCESS, payload: result.data});
        console.log('proffession Success');
      } else {
        dispatch({type: PROFESSION_LIST_FAILURE});
        console.log('proffession Failure');
      }
    } catch (e) {
      console.log('the error', e);
    }
  };
};
