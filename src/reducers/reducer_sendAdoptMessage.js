import {SEND_ADOPTION_MESSAGE} from '../constants.js';
export default function (state=[], action){
    switch(action.type){
        case SEND_ADOPTION_MESSAGE:
        return action.payload;

        default: 
        return state
    }
}