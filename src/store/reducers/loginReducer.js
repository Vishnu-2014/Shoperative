import * as login from '../actions/loginActions';
const initialState = {
  description: '',
  user_details: {},
  code: '',
  token: '',
  message: '',
  loginStarted: false,
  loginSuccess: false,
  loginFailure: false,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.LOGIN_STARTED:
      return {
        ...state,
        loginStarted: true,
      };
    case login.LOGIN_SUCCESS:
      const {user_details, code, description, message, token} = action.payload;
      return {
        ...state,
        user_details,
        message,
        description,
        token,
        code,
        loginStarted: false,
        loginSuccess: true,
      };
    case login.LOGIN_FAILURE:
      return {
        ...state,
        loginStarted: false,
        loginFailure: true,
      };
    case login.UPDATE_USER_DETAILS:
      const {key, value} = action.payload;
      return {
        ...state,
        user_details: {...state.user_details, [key]: value},
      };
    default:
      return state;
  }
};
export default loginReducer;
