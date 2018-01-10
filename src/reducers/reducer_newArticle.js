import {NEW_ARTICLE} from '../constants.js';
export default function  article (state=[], action){
    console.log('create reducer', state)
    console.log('payload', action.payload)
    switch(action.type){
        case NEW_ARTICLE:
         return [action.payload,...state]
    };
    
     return state;
}
