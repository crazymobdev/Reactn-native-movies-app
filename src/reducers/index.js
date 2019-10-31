import { combineReducers } from 'redux';
import uiReducer from './ui-reducer';
import firebaseReducer from './firebase-reducer';

export default combineReducers({
  uiReducer,
  firebaseReducer,
});
