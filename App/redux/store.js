import { createStore, combineReducers, applyMiddleware } from 'redux';
import { autReducer } from './reducer/authReducer';
import { dataReducer } from './reducer/dataReducer';
import thunk from 'redux-thunk';

const rootStore = combineReducers({
  auth: autReducer,
  data: dataReducer,
});

export const store = createStore(rootStore, applyMiddleware(thunk));
