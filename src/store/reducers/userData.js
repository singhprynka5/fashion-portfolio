import { SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAILED } from "../actions/actionType";

const initialState = {};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state
      };
    case SUBMIT_FORM_FAILED:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default userData;
