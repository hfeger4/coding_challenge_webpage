import {combineReducers} from 'redux';
import ProfilesReducer from './profiles_reducer';
import ReducerTopRated from './reducer_top_rated';

const rootReducer = combineReducers({
  profiles: ProfilesReducer,
  TopProfiles: ReducerTopRated
});

export default rootReducer;
