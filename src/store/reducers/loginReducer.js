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
  message: '',
  description: '',
  result: '',
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
      const {
        blood_group,
        code,
        description,
        email,
        gender,
        message,
        mobile,
        name,
        upi_code,
        user_code,
        user_id,
      } = action.payload;
      return {
        ...state,
        user_id: user_id,
        name: name,
        email: email,
        mobile: mobile,
        user_code: user_code,
        gender: gender,
        message: message,
        description: description,
        blood_group: blood_group,
        upi_code: upi_code,
        result: action.payload,
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
