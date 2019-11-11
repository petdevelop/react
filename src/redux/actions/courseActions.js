import * as types from "./actionTypes";
import * as courseAPI from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusAction";

export const LoadCoursesSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export const CreateCourseSuccess = course => {
  return { type: types.CREATE_COURSE_SUCCESS, course };
};

export const UpdateCourseSuccess = course => {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
};

export const loadCourses = () => {
  return dispatch => {
    dispatch(beginApiCall());
    return courseAPI
      .getCourses()
      .then(courses => {
        setTimeout(() => {
          dispatch(LoadCoursesSuccess(courses));
        }, 2000);
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
};

export const saveCourse = course => {
  return (dispatch, getState) => {
    dispatch(beginApiCall());
    return courseAPI
      .saveCourse(course)
      .then(savedCourse => {
        setTimeout(() => {
          course.id
            ? dispatch(UpdateCourseSuccess(savedCourse))
            : dispatch(CreateCourseSuccess(savedCourse));
        }, 2000);
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
};
