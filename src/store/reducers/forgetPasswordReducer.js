import * as forgetPassword from '../actions/loginActions';
const initialState = {
  code: '',
  message: '',
  description: '',
  forgetPasswordStarted: false,
  forgetpasswordSuccess: false,
  forgetPasswordFailure: false,
};

const forgetpasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case forgetPassword.FORGET_PASSWORD_STARTED:
      return {
        ...state,
        forgetPasswordStarted: true,
      };
    case forgetPassword.FORGET_PASSWORD_SUCCESS:
      const {code, message, description} = action.payload;
      return {
        ...state,
        code,
        message,
        description,
        forgetPasswordStarted: false,
        forgetpasswordSuccess: true,
      };
    case forgetPassword.FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        forgetPasswordStarted: false,
        forgetPasswordFailure: true,
      };
    default:
      return state;
  }
};

export default forgetpasswordReducer;
