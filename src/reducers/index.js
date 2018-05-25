import {combineReducers} from 'redux';
import LandingLiveTicker from './requestapi';
import { reducer as reduxFormReducer } from 'redux-form';
const reducers = combineReducers({
price:LandingLiveTicker,
from:reduxFormReducer
})
export default reducers;
