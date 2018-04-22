import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import { DELETE_IMAGE_REQUEST } from '../actions/types'

import {
  deleteImageRequestFailure,
  deleteImageRequestSuccess,
  triggerImagesRequest
} from '../actions/generators'

function* deleteImage(action) {
  try {
    const { imageId } = action
    const response = yield call(fetch, `/api/images/${imageId}`, {
      method : 'DELETE'
    })
    yield put(deleteImageRequestSuccess());
    yield put(triggerImagesRequest());
  } catch (e) {
    console.error(e);
    yield put(deleteImageRequestFailure());
  }
}

function* sendImage() {
  yield takeLatest(DELETE_IMAGE_REQUEST, deleteImage);
}

export default sendImage
