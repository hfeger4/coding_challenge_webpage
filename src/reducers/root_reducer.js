import {combineReducers} from 'redux';
import ProfilesReducer from './profiles_reducer';

const rootReducer = combineReducers({
  profiles: ProfilesReducer
});

export default rootReducer;
