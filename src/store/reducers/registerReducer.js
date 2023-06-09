import {register} from '../actions/registerActions';
const initialState = {
  username: '',
  mobile: '',
  email: '',
  password: '',
  confirm_password: '',
  profession: '',
  monthly_income: '',
  registerStarted: false,
  registerSuccess: false,
  registerFailure: false,
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case register.REGISTER_STARTED:
      return {
        ...state,
        registerStarted: true,
      };
    case register.REGISTER_SUCCESS:
      const {
        username,
        mobile,
        email,
        password,
        confirm_password,
        profession,
        monthly_income,
      } = action.payload;
      return {
        ...state,
        username,
        mobile,
        email,
        password,
        confirm_password,
        profession,
        monthly_income,
        registerStarted: false,
        registerSuccess: true,
      };
    case register.REGISTER_FAILURE:
      return {
        ...state,
        registerStarted: false,
        registerFailure: true,
      };
    default:
      return state;
  }
};
export default registerReducer;
