import {createStore, combineReducers, applyMiddleware} from 'redux';
import ticTacToeReducer from '../reducers/ticTacToeReducer';

import logger from 'redux-logger';

const rootReducer = combineReducers({ticTacToe: ticTacToeReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(logger));
};

export default configureStore;
