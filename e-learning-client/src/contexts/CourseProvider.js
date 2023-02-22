import React, { createContext, useEffect, useReducer } from "react";
import { actionTypes } from "../state/actionTypes";
import { courseReducer, initialState } from "../state/courseReducer";

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, initialState);

  // fetch all courses
  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("https://e-learning-app-i5dn.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCHING_END, payload: data });
      });
  }, []);

  // to Sort the courses
  useEffect(() => {
    dispatch({ type: actionTypes.SORTING_COURSE, payload: state.courses });
  }, [state.sorting_value]);

  const course_info = {
    state,
    dispatch,
  };
  return (
    <CourseContext.Provider value={course_info}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
