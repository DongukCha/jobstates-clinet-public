import * as types from 'actions/actionTypes';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_HEADER:
      return [action.payload, ...state];
    default:
      return state;
  }
}
