import * as login from '../actions/loginActions';
const initialState = {
  user_id: 0,
  name: '',
  email: '',
  mobile: '',
  user_code: '',
  gender: '',
  blood_group: '',
  upi_code: '',
  loginStarted: false,
  loginSuccess: false,
  loginFailure: false,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.LOGIN_STARTED:
      console.log('the login started');
      return {
        ...state,
        loginStarted: true,
      };
    case login.LOGIN_SUCCESS:
      return {
        ...state,
        loginStarted: false,
        loginSuccess: true,
      };
    case login.LOGIN_FAILURE:
      return {
        ...state,
        loginStarted: false,
        loginFailure: true,
      };
    default:
      return state;
  }
};
export default loginReducer;
