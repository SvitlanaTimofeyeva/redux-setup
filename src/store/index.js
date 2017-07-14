import { createStore, applyMiddleware } from 'redux'; 
import thunkMiddleware from 'redux-thunk'; 
import { createBrowserHistory } from 'history'; 
import { routerMiddleware } from 'react-router-redux'; 
import { autoRehydrate } from 'redux-persist'; 

import rootReducer from '../reducers'  

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState, 
	applyMiddleware(thunkMiddleware), 
  autoRehydrate()
  );
}