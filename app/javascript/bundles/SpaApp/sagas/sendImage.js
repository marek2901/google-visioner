import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import { NEW_IMAGE_REQUEST } from '../actions/types'

import {
  addNewFileSuccess,
  addNewFileFailure,
  triggerImagesRequest
} from '../actions/generators'

function* newImageRequest(action) {
  try {
    const { title, file } = action.fileFormData
    let data = new FormData();
    data.append('title', title)
    data.append('file', file)
    yield call(fetch, '/api/images', {
      method : 'POST',
      body : data
    })
    yield put(addNewFileSuccess());
    yield put(triggerImagesRequest());
  } catch (e) {
    console.error(e);
    yield put(addNewFileFailure());
  }
}

function* sendImage() {
  yield takeLatest(NEW_IMAGE_REQUEST, newImageRequest);
}

export default sendImage
