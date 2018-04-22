import {
  REQUEST_IMAGES_DATA,
  REQUEST_IMAGES_DATA_SUCCESS,
  REQUEST_IMAGES_DATA_FAILURE,
  SET_PREVIEW_IMAGE
} from './types'

export function triggerImagesRequest() {
  return {
    type: REQUEST_IMAGES_DATA
  }
}

export function imagesRequestSuccess(data) {
  return {
    type: REQUEST_IMAGES_DATA_SUCCESS,
    data
  }
}

export function imagesRequestFailure(message) {
  return {
    type: REQUEST_IMAGES_DATA_FAILURE,
    message
  }
}

export function setPreviewImage(imageData) {
  return {
    type: SET_PREVIEW_IMAGE,
    imageData
  }
}
