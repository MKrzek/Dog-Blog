import {ADD_VOTE} from '../constants.js';
export default function (state=[], action){
  switch(action.type){
      case ADD_VOTE:
       return action.payload;

       default: 
        return state
  }
}