import { all } from 'redux-saga/effects'

import imagesSaga from './fetchImages'
import sendImageSaga from './sendImage'
import deleteImageSaga from './deleteImage'

export default function* rootSaga() {
  yield all([
    imagesSaga(),
    sendImageSaga(),
    deleteImageSaga()
  ])
}
