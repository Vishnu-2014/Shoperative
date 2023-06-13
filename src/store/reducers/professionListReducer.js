import {professionList} from '../actions/professionListActions';
const initialState = {
  code: '',
  message: '',
  description: '',
  profession_list: [],
  income_list: [],
  professionListStarted: false,
  professionListSuccess: false,
  professionListFailure: false,
};
const professionListReducer = (state = initialState, action) => {
  switch (action.type) {
    case professionList.PROFESSION_LIST_STARTED:
      return {
        ...state,
        professionListStarted: true,
      };
    case professionList.PROFESSION_LIST_SUCCESS:
      const {profession_list, code, description, message, income_list} =
        action.payload;
      return {
        ...state,
        code,
        message,
        description,
        profession_list,
        income_list,
        professionListStarted: false,
        professionListSuccess: true,
      };
    case professionList.PROFESSION_LIST_FAILURE:
      return {
        ...state,
        professionListStarted: false,
        professionListFailure: true,
      };
    default:
      return state;
  }
};
export default professionListReducer;
