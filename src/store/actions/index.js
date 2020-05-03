import { SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAILED } from "./actionType";
import axios from "axios";

export const submitUserData = () => {
  return async dispatch => {
    try {
      const response = await axios.post("");
      return dispatch(fetchStatus(response.data, SUBMIT_FORM_SUCCESS));
    } catch (err) {
      return dispatch(fetchStatus(err, SUBMIT_FORM_FAILED));
    }
  };
};

export const fetchStatus = (res, type) => {
  return {
    type: type,
    payload: res
  };
};
