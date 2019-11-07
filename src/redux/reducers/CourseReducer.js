import * as types from "../actions/actionTypes";

const CourseReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
};

export default CourseReducer;
