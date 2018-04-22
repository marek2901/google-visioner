const { fromJS } = require('immutable')

import {
  REQUEST_IMAGES_DATA_SUCCESS,
  REQUEST_IMAGES_DATA_FAILURE,
  REQUEST_IMAGES_DATA,
  NEW_IMAGE_REQUEST,
  NEW_IMAGE_REQUEST_SUCCESS,
  NEW_IMAGE_REQUEST_FAILURE,
  SHOW_DIALOG,
  HIDE_DIALOG
} from '../actions/types'

const initialState = fromJS({
  onGoingRequest: false,
  dialog: false
}); 

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGES_DATA:
    case NEW_IMAGE_REQUEST:
      return state.set('onGoingRequest', true)
    case REQUEST_IMAGES_DATA_FAILURE:
    case REQUEST_IMAGES_DATA_SUCCESS:
      return state.set('onGoingRequest', false)
    case NEW_IMAGE_REQUEST_SUCCESS:
    case NEW_IMAGE_REQUEST_FAILURE:
      return state.set('onGoingRequest', false)
                  .set('dialog', false)
    case SHOW_DIALOG:
      return state.set('dialog', true);
    case HIDE_DIALOG:
      return state.set('dialog', false);
    default:
      return state;
  }
}

export default uiReducer;
