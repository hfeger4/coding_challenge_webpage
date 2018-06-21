import {combineReducers} from 'redux';
import ProfilesReducer from './profiles_reducer';
import TopRatedReducer from './reducer_top_rated';

const rootReducer = combineReducers({
  profiles: ProfilesReducer,
  topProfiles: TopRatedReducer
});

export default rootReducer;
