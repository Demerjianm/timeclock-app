import { combineReducers } from 'redux';
import user from './user';
import timeclocks from './timeclocks'

const rootReducer = combineReducers({
  user,
  timeclocks
});

export default rootReducer;