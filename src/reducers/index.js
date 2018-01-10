import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form';
import AuthReducer from './reducer_auth.js';


const rootReducer=combineReducers({
    form: FormReducer,
    auth: AuthReducer,
    router: routerReducer
    
})
export default rootReducer;