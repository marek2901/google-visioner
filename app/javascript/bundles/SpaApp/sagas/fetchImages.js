import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import { REQUEST_IMAGES_DATA } from '../actions/types'

import {
  imagesRequestSuccess,
  imagesRequestFailure
} from '../actions/generators'

function* fetchImagesData(action) {
  try {
    const request = yield call(
      fetch,
      `/api/images`,
    );
    const response = yield call([request, request.json])
    yield put(imagesRequestSuccess({
      imgs: response.data
    }));
  } catch (e) {
    yield put(imagesRequestFailure(e.message));
  }
}

function* fetchImagesSaga() {
  yield takeLatest(REQUEST_IMAGES_DATA, fetchImagesData);
}

export default fetchImagesSaga;
