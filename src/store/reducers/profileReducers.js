import * as profile from '../actions/profileActions';
const initialState = {
  code: '',
  message: '',
  description: '',
  user_details: {},
  profileStarted: false,
  profileSuccess: false,
  profileFailure: false,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profile.PROFILE_STARTED:
      return {
        ...state,
        profileStarted: true,
      };
    case profile.PROFILE_SUCCESS:
      const {user_details, code, description, message} = action.payload;
      return {
        ...state,
        code,
        message,
        description,
        user_details,
        profileStarted: false,
        profileSuccess: true,
      };
    case profile.PROFILE_FAILURE:
      return {
        ...state,
        profileStarted: false,
        profileFailure: true,
      };
    default:
      return state;
  }
};
export default profileReducer;
