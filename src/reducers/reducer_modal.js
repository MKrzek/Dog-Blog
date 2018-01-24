import {OPEN_MODAL, CLOSE_MODAL} from '../constants.js';
const initialState={
    selectedDog: null,
    modalIsOpen: false
}
export default function (state=initialState, action){
    switch(action.type){
         case OPEN_MODAL:
         return {
             ...state,
               selectedDog: action.payload,
               modalIsOpen: true
         }

         case CLOSE_MODAL:
        return {
            ...state,
              selectedDog: null,
              modalIsOpen: false
        }
        default: 
        return state

    }
}