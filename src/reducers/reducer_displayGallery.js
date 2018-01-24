import {DISPLAY_GALLERY} from "../constants.js";

export default function (state=[], action){
    switch(action.type){
        case DISPLAY_GALLERY:
        return action.payload;

        default:
         return state
    }
}