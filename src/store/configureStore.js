import {createStore, compose, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import{routerMiddleware} from 'react-router-redux';

import rootReducer from '../reducers/index.js';

export const history=createHistory();

export function configureStore(initialState){
    const store=createStore(
    rootReducer,
    initialState,
    //compose(
        //applyMiddleware(reduxThunk), 
        //routerMiddleware(history)
    //),
    )
    
    return store;
}
