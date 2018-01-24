import {ADD_GALLERY} from '../constants.js'
export default function (state=[], action){
    switch(action.type){
        case ADD_GALLERY:
        return action.payload;

        default: 
        return state
    }
}