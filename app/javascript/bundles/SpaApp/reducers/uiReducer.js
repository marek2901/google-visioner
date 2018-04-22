const { fromJS } = require('immutable')

import {
  REQUEST_IMAGES_DATA_SUCCESS,
  REQUEST_IMAGES_DATA_FAILURE,
  REQUEST_IMAGES_DATA,
  NEW_IMAGE_REQUEST,
  NEW_IMAGE_REQUEST_SUCCESS,
  NEW_IMAGE_REQUEST_FAILURE,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_REQUEST_FAILURE,
  DELETE_IMAGE_REQUEST_SUCCESS,
  SHOW_DIALOG,
  HIDE_DIALOG
} from '../actions/types'

const initialState = fromJS({
  onGoingRequest: false,
  onGoingRequestMessage: '',
  dialog: false
});

const setOnGoinReqState = (state, onGoing, message = '') =>
  state.set('onGoingRequest', onGoing)
       .set('onGoingRequestMessage', message)

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGES_DATA:
      return setOnGoinReqState(state, true, 'Downloading images')
    case NEW_IMAGE_REQUEST:
      return setOnGoinReqState(state, true, 'Uploading image')
    case DELETE_IMAGE_REQUEST:
      return setOnGoinReqState(state, true, 'Deleting Image')
    case REQUEST_IMAGES_DATA_FAILURE:
    case REQUEST_IMAGES_DATA_SUCCESS:
    case DELETE_IMAGE_REQUEST_FAILURE:
    case DELETE_IMAGE_REQUEST_SUCCESS:
      return setOnGoinReqState(state, false)
    case NEW_IMAGE_REQUEST_SUCCESS:
    case NEW_IMAGE_REQUEST_FAILURE:
      return setOnGoinReqState(state, false)
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
