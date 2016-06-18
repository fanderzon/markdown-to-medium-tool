import { createStore } from 'redux';

export const SET_CONTENT = 'SET_CONTENT';
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const SET_CODESPAN = 'SET_CODESPAN';

export function setContent(content) {
  return { type: SET_CONTENT, content: content };
}
export function setCodespan(options) {
  return { type: SET_CODESPAN, options: options };
}
export function openMenu() {
  return { type: OPEN_MENU };
}
export function closeMenu() {
  return { type: CLOSE_MENU };
}

export function reducer(state = { content: '', menuactive: false, codespan: {} }, action) {
  switch (action.type) {
    case SET_CONTENT:
      return Object.assign({}, state, {
        content: action.content
      });
    case SET_CODESPAN:
      return Object.assign({}, state, {
        codespan: action.options
      });
    case OPEN_MENU:
    return Object.assign({}, state, {
      menuactive: true
    });
    case CLOSE_MENU:
    return Object.assign({}, state, {
      menuactive: false
    });
    default:
      return state
  }
}

export const store = createStore(reducer);
