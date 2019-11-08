import * as types from "./actionTypes";
import * as courseAPI from "../../api/courseApi";

export const CreateCourse = course => {
  return { type: types.CREATE_COURSE, course };
};

export const LoadCoursesSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export const loadCourses = () => {
  return dispatch => {
    return courseAPI
      .getCourses()
      .then(courses => {
        dispatch(LoadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
};
