import {DISPLAY_ADOPTION} from '../constants.js';
export default function (state=[], action){
    
    switch(action.type){
        case DISPLAY_ADOPTION:
         return action.payload

         default: 
         return state
    }
}