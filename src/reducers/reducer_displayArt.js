import{DISPLAY_ARTICLES} from "../constants.js";

export default function (state=[], action){
    
    switch(action.type){
        case DISPLAY_ARTICLES:
            return action.payload;
        default:
              return state;
}
}