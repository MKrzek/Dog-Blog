import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form';
import AuthReducer from './reducer_auth.js';
import NewArticleReducer from './reducer_newArticle.js';
import DisplayArticle from './reducer_displayArt.js';
import AddVet from './reducer_addVet.js';
import DisplayVets from './reducer_displayVets.js';

const rootReducer=combineReducers({
    form: FormReducer,
    auth: AuthReducer,
    router: routerReducer,
    newArticle: NewArticleReducer,
    displayArticle: DisplayArticle,
    newVet: AddVet,
    displayVets: DisplayVets,

    
})
export default rootReducer;