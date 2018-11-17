import axios from 'axios';

export const FETCH_USER_PROFILE_BEGIN = 'FETCH_USER_PROFILE_BEGIN';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';

// action

export const FETCH_USER = 'FETCH_USR';
export const fetchUser = () => {
  const url = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/user';
  // const request = axios.get(url);

  const request = axios.get(url);

  // console.log('request in action fetchusr', request);

  return {
    type: FETCH_USER,
    payload: request,
  };
};

//= ======= https://daveceddia.com/where-fetch-data-redux/ =====

export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchUserProfileBegin = () => ({
  type: FETCH_USER_PROFILE_BEGIN,
});

export const fetchUserProfileSuccess = user => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  payload: { user },
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

// Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

// export function fetchProducts() {
//   return dispatch => {
//     dispatch(fetchProductsBegin());
//     return fetch(
//       'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/user',
//     )
//       .then(handleErrors)
//       .then(res => console.log(res.json()))
//       .then(json => {
//         dispatch(fetchProductsSuccess(json.products));
//         return console.log(json.products);
//       })
//       .catch(error => dispatch(fetchProductsFailure(error)));
//   };
// }

// // ============ REDUX 공식문서 https://redux.js.org/advanced/asyncactions ===========

// export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE';
// export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

// const requestUserProfile = id => ({
//   type: REQUEST_USER_PROFILE,
//   id,
// });

// const receivedUserProfile = (id, json) => ({
//   type: RECEIVE_USER_PROFILE,
//   id: json.data.id,
//   snsid: json.data.snsid,
//   profile: json.data.profile,
//   newUser: json.data.newUser,
//   nick: json.data.nick,
//   photo: json.data.photo,
// });

// export const fetchUserProfile = id => dispatch => {
//   dispatch(requestUserProfile(id));

//   return fetch('http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/user')
//     .then(
//       response => response.json(),
//       // error => console.log('An error occurred', error)
//     )
//     .then(json => dispatch(receivedUserProfile(id, json)));
// };
