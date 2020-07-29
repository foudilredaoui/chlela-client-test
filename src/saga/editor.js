import { call, put, takeEvery, select } from 'redux-saga/effects';
import {POST_IMG_REQUEST, POST_IMG_SUCCESS} from '../redux/editor';
import { postIMGSuccess, postIMGFailed } from '../redux/editor';
import axios from 'axios';



function* postIMGRequest(api,action) {
  const { image } = action.payload;
  const formData = new FormData();
  formData.append('image', image);
  try {
    yield call(api.postIMG,formData);
    yield put(postIMGSuccess());
  } catch (e) {
    yield put(postIMGFailed());
  }
}

export function* editorSaga(api) {
  yield takeEvery(POST_IMG_REQUEST, postIMGRequest,api);
  yield takeEvery(POST_IMG_SUCCESS, () => window.location.href='/');
}