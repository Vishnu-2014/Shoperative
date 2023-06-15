import * as profile from '../actions/profileActions';
const initialState = {
  code: '',
  message: '',
  description: '',
  changeUserPassword: false,
};
const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case profile.PROFILE_SUCCESS:
      const {code, description, message} = action.payload;
      return {
        ...state,
        code,
        message,
        description,
        profileStarted: false,
      };
    default:
      return state;
  }
};
export default changePasswordReducer;
