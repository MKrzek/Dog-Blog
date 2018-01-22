import {ADD_VET} from '../constants.js';
export default function (state=[], action){
  switch(action.type){
      case ADD_VET:
      return [...state, action.payload];
      default:
      return state
  }  
}