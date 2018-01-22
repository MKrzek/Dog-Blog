import {DISPLAY_VETS} from '../constants.js';
export default function (state=[], action){
    switch(action.type){
        case DISPLAY_VETS:
        return action.payload

        default: 
         return state
    }
}