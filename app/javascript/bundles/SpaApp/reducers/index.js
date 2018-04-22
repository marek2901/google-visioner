import { combineReducers } from 'redux'
import imagesReducer from './imagesReducer';
import uiReducer from './uiReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  images: imagesReducer,
  form: formReducer,
  ui: uiReducer
})

export default rootReducer;
