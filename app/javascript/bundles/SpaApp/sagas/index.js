import { all } from 'redux-saga/effects';

import imagesSaga from './fetchImages';

export default function* rootSaga() {
  yield all([
    imagesSaga()
  ])
}
