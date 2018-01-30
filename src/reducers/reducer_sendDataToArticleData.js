import {SEND_DATA_TO_ARTICLE_DATA} from '../constants.js';
export default function (state=[], action){
    
    switch(action.type){
        case SEND_DATA_TO_ARTICLE_DATA:
          return action.payload;

          default: 
          return state 
        
    }
}