import {VET_LOCATION} from '../constants.js';
export default function(state=[], action){
    
    switch(action.type){
        case VET_LOCATION:
        return  action.payload


        default:
         return state
    }
}