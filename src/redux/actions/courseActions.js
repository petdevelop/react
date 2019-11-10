import * as types from "./actionTypes";
import * as courseAPI from "../../api/courseApi";

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

export const saveCourse = course => {
  return (dispatch, getState) => {
    return courseAPI
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(UpdateCourseSuccess(savedCourse))
          : dispatch(CreateCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
};
