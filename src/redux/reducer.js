import { combineReducers } from "redux";
import {
  ADD_COMMENT,
  COMMENTS_LOADING,
  DISHES_LOADING,
  FAILED_DISHES,
  LOAD_COMMENTS,
  LOAD_DISHES,
  LOAD_FEEDBACKS,
} from "./actionTypes";
import { createForms } from "react-redux-form";
import { initialContactForm } from "./forms";

const dishReducer = (
  dishState = { isLoading: false, dishes: [], errMsg: null },
  action
) => {
  switch (action.type) {
    case DISHES_LOADING:
      return {
        ...dishState,
        isLoading: true,
        dishes: [],
        errMsg: null,
      };
    case LOAD_DISHES:
      return {
        ...dishState,
        isLoading: false,
        dishes: action.payload,
        errMsg: null,
      };
    case FAILED_DISHES:
      return {
        ...dishState,
        isLoading: false,
        dishes: [],
        errMsg: action.payload,
      };
    default:
      return dishState;
  }
};

const commentReducer = (
  commentState = { isLoading: false, comments: [] },
  action
) => {
  switch (action.type) {
    case COMMENTS_LOADING:
      return {
        ...commentState,
        isLoading: true,
        comments: [],
      };
    case LOAD_COMMENTS:
      return {
        ...commentState,
        isLoading: false,
        comments: action.payload,
      };
    case ADD_COMMENT:
      const newComment = action.payload;
      return {
        ...commentState,
        comments: commentState.comments.concat(newComment),
      };
    default:
      return commentState;
  }
};

const feedbackReducer = (feedbackState = { feedbacks: [] }, action) => {
  switch (action.type) {
    case LOAD_FEEDBACKS:
      return { ...feedbackState, feedbacks: action.payload };
    default:
      return feedbackState;
  }
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
  feedbacks: feedbackReducer,
  ...createForms({ feedback: initialContactForm }),
});
