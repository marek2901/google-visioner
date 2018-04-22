const { fromJS } = require('immutable')

import {
  REQUEST_IMAGES_DATA_SUCCESS,
  REQUEST_IMAGES_DATA_FAILURE,
  REQUEST_IMAGES_DATA
} from '../actions/types'

const initialState = fromJS({
  imagesLoading: false
}); 

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGES_DATA:
      return state.set('imagesLoading', true)
    case REQUEST_IMAGES_DATA_FAILURE:
      return state.set('imagesLoading', false);
    case REQUEST_IMAGES_DATA_SUCCESS:
      return state.set('imagesLoading', false);
    default:
      return state;
  }
}

export default uiReducer;
