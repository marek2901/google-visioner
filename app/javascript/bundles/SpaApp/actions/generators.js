import {
  REQUEST_IMAGES_DATA,
  REQUEST_IMAGES_DATA_SUCCESS,
  REQUEST_IMAGES_DATA_FAILURE,
  SET_PREVIEW_IMAGE,
  NEW_IMAGE_REQUEST,
  NEW_IMAGE_REQUEST_SUCCESS,
  NEW_IMAGE_REQUEST_FAILURE,
  SHOW_DIALOG,
  HIDE_DIALOG
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

export function addNewFile(fileFormData) {
  return {
    type: NEW_IMAGE_REQUEST,
    fileFormData
  }
}

export function addNewFileSuccess() {
  return {
    type: NEW_IMAGE_REQUEST_SUCCESS
  }
}

export function addNewFileFailure() {
  return {
    type: NEW_IMAGE_REQUEST_FAILURE
  }
}

export function showDialog() {
  return {
    type: SHOW_DIALOG
  }
}

export function hideDialog() {
  return {
    type: HIDE_DIALOG
  }
}
