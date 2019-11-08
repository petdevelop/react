import * as types from "./actionTypes";
import * as authorAPI from "../../api/authorApi";

export const LoadAuthorsSuccess = authors => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

export const loadAuthors = () => {
  return dispatch => {
    return authorAPI
      .getAuthors()
      .then(authors => {
        dispatch(LoadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
};
