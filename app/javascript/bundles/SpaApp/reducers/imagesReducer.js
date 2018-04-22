const { fromJS, List } = require('immutable')

import {
  REQUEST_IMAGES_DATA_SUCCESS,
  REQUEST_IMAGES_DATA_FAILURE,
  SET_PREVIEW_IMAGE
} from '../actions/types'

const initialState = fromJS({
  dataArray: [],
  previewedImage: null
}); 

function imagesAppReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGES_DATA_SUCCESS:
      return state.set('dataArray', List(action.data.imgs));
    case SET_PREVIEW_IMAGE:
      return state.set('previewedImage', fromJS(action.imageData))
    default:
      return state;
  }
}

export default imagesAppReducer;
