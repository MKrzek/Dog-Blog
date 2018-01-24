import {BLOCK_VOTE} from '../constants.js';
export default function(state=true, action){
    switch(action.type){
        case BLOCK_VOTE:
        return action.payload;

        default: 
        return state
    }
}