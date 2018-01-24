import {ADD_ADOPTION} from '../constants.js';
export default function (state=[], action){
    switch(action.type){
        case ADD_ADOPTION:
         return action.payload;

         default: 
          return state
    }
}