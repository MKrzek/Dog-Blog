import {DISPLAY_DOG_FRIENDLY} from '../constants.js';

export default function (state=[], action){
    switch(action.type){
        case DISPLAY_DOG_FRIENDLY:
          return action.payload;

        default:
        return state;

    }
}