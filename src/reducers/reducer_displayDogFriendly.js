import {DISPLAY_DOG_FRIENDLY, DISPLAY_DFTAGS} from '../constants.js';

export default function (state=[], action){
    
    switch(action.type){
        case DISPLAY_DOG_FRIENDLY:
          return action.payload;
        case DISPLAY_DFTAGS:
         return action.payload

        default:
        return state;

    }
}