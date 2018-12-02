import * as types from 'actions/actionTypes';
import * as api from 'api/api';
import { push } from 'connected-react-router';

const fetchUserProfileBegin = () => ({
  type: types.FETCH_USER_PROFILE_BEGIN,
});

const fetchUserProfileSuccess = user => ({
  type: types.FETCH_USER_PROFILE_SUCCESS,
  payload: { user },
});

const fetchUserProfileFailure = error => ({
  type: types.FETCH_USER_PROFILE_FAILURE,
  payload: { error },
});

const uploadUserImageSuccess = imgUrl => ({
  type: types.GET_USER_IMAGE_URL,
  payload: { imgUrl },
});

export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserProfileBegin());

  const responseFetchUserData = await api.getUserProfile();

  try {
    if (responseFetchUserData.data.code === 200) {
      dispatch(fetchUserProfileSuccess(responseFetchUserData.data.data));
    } else {
      dispatch(fetchUserProfileFailure(responseFetchUserData.data));
      alert(responseFetchUserData.data.message);
      dispatch(push('/logout'));
    }
  } catch (err) {
    console.log('action_userprofile: onSubmitPostUserEdu error', err);
    dispatch(fetchUserProfileFailure(responseFetchUserData.data));
  }
};

export const onSubmitPostUser = (data, part) => async (dispatch) => {
  dispatch(fetchUserProfileBegin());
  try {
    const responsePostUserData = await api.postUserProfile(data, part);

    if (responsePostUserData.data.code === 200) {
      dispatch(fetchUserProfileSuccess(responsePostUserData.data));
    } else {
      dispatch(fetchUserProfileFailure(responsePostUserData.data));
      alert(responsePostUserData.data.message);
      dispatch(push('/logout'));
    }
  } catch (err) {
    console.log('action_userprofile: onSubmitPostUserEdu error', err);
    dispatch(
      fetchUserProfileFailure({ code: 404, message: 'Internal Error!' }),
    );
  }
};

export const onSubmitPatchUser = (data, part) => async (dispatch) => {
  dispatch(fetchUserProfileBegin());
  try {
    console.log('patching data', data);
    const responsePostUserData = await api.updateUserProfile(data, part);
    dispatch(fetchUserProfileSuccess(responsePostUserData.data));
  } catch (err) {
    dispatch(fetchUserProfileFailure(err));
  }
};

export const deleteUserProfile = (data, part) => async (dispatch) => {
  dispatch(fetchUserProfileBegin());
  try {
    console.log('deleting data', data, part);
    const deletedRes = await api.deleteUserProfile(data, part);
    console.log('deleted', deletedRes.data);
    dispatch(fetchUserProfileSuccess(deletedRes.data));
  } catch (err) {
    dispatch(fetchUserProfileFailure(err));
  }
};

export const uploadUserImage = data => async (dispatch) => {
  try {
    const imgUrlResponse = await api.postUserImage(data);

    dispatch(uploadUserImageSuccess(imgUrlResponse));
  } catch (err) {
    console.log(err);
  }
};
