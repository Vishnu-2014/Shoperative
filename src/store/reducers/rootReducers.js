import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import forgetpasswordReducer from './forgetPasswordReducer';
import profileReducer from './profileReducers';

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  forgetPassword: forgetpasswordReducer,
  profile: profileReducer,
});
