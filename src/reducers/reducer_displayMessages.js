import {DISPLAY_MESSAGES} from '../constants.js';
export default function (state=[], action){
    switch(action.type){
        case DISPLAY_MESSAGES:
        return action.payload;

        default:
        return state
    }
}