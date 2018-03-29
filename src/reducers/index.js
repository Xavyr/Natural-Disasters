import { combineReducers } from 'redux';
import chartsReducer from './chartsReducer';
import mapsReducer from './mapsReducer';

const reducers = combineReducers({
  charts: chartsReducer,
  maps: mapsReducer
});

export default reducers;