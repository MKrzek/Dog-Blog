import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form';
import AuthReducer from './reducer_auth.js';
import NewArticleReducer from './reducer_newArticle.js';

const rootReducer=combineReducers({
    form: FormReducer,
    auth: AuthReducer,
    router: routerReducer,
    newArticle: NewArticleReducer
    
})
export default rootReducer;