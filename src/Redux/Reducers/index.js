import {combineReducers} from 'redux';
import questionsData from './Questions';
import config from './Configs'

export default combineReducers({
   questionsData,
   config
});