import * as types from "./actionTypes";
import * as authorAPI from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusAction";

export const LoadAuthorsSuccess = authors => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

export const loadAuthors = () => {
  return dispatch => {
    dispatch(beginApiCall());
    return authorAPI
      .getAuthors()
      .then(authors => {
        setTimeout(() => {
          dispatch(LoadAuthorsSuccess(authors));
        }, 2000);
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};
