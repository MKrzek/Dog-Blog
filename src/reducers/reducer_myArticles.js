import {DISPLAY_MY_ARTICLES} from '../constants.js';
export  default function (state=[], action){
  switch(action.type){
      case DISPLAY_MY_ARTICLES:
        return action.payload

        default: 
        return state 
  }
}