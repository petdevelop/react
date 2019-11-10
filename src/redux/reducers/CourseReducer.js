import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const CourseReducer = (state = initialState.authors, action) => {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
};

export default CourseReducer;
