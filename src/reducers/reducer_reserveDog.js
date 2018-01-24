import {RESERVE_DOG} from '../constants.js';

export default function (state=[], action){
    console.log ('reducer reserve', action.payload)
    switch (action.type){
        case RESERVE_DOG:
           return action.payload;

        default: 
        return state
    }
}