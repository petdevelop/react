import * as types from "./actionTypes";

export const CreateCourse = course => {
  return { type: types.CREATE_COURSE, course };
};
