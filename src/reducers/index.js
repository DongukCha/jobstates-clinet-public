import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Analysis from './reducer_analysis';
import fetchedProfile from './reducer_fetchedProfile';
import auth from './reducer_authenticate';
import job from './reducer_job';

const rootReducers = history => combineReducers({
    router: connectRouter(history),
    fetchedProfile,
    Analysis,
    job,
    auth,
  });

export default rootReducers;
