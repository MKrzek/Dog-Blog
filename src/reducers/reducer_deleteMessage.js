import {DELETE_MESSAGE} from '../constants.js';

export default function (state=[], action){
     console.log ('state', state)
     switch(action.type){
         case DELETE_MESSAGE:
            return state ;

            default: 
              return state 

     }
}