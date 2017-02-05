import { createStore } from 'redux';

export const SET_CONTENT = 'SET_CONTENT';

export function setContent(content) {
  return { type: SET_CONTENT, content: content };
}

export function reducer(state = {
    content: '',
  }, action) {
  switch (action.type) {
    case SET_CONTENT:
      return Object.assign({}, state, {
        content: action.content
      });
    default:
      return state
  }
}

export const store = createStore(reducer);
