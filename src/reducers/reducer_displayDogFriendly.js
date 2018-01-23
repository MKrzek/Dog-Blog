import {DISPLAY_DOG_FRIENDLY, DISPLAY_DFTAGS} from '../constants.js';

export default function (state=[], action){
    console.log ('search payload', action.payload)
    switch(action.type){
        case DISPLAY_DOG_FRIENDLY:
          return action.payload;
        case DISPLAY_DFTAGS:
         return action.payload

        default:
        return state;

    }
}