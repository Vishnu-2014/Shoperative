import {legacy_createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './reducers/rootReducers';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);

const storeConfig = () => {
  return legacy_createStore(rootReducer, undefined, composedEnhancers);
};

export default storeConfig;
