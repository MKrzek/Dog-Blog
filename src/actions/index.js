import * as firebase from 'firebase';
import {AUTH_USER} from '../constants.js';
import {AUTH_ERROR} from '../constants.js';
import {SIGN_OUT_USER} from '../constants.js';


const config = {
    apiKey: "AIzaSyAW2Ju7jK7YGKn0qZtmCp7u7dTB2lvgJCs",
    authDomain: "dog-blog-50b2a.firebaseapp.com",
    databaseURL: "https://dog-blog-50b2a.firebaseio.com",
    projectId: "dog-blog-50b2a",
    storageBucket: "dog-blog-50b2a.appspot.com",
    messagingSenderId: "925286955795"
};
const firebaseApp=firebase.initializeApp(config);
export function SignUpUser(values){
     return function (dispatch){
    firebaseApp.auth().createUserWithEmailAndPassword(values.email, values.password)
    .then(response=>{
        dispatch(authUser());
    })
    .catch(error=>{
        console.log(error)
        dispatch(authError(error));
    })
 };
}
 export function LogInUser(values){
    return function (dispatch){
    firebaseApp.auth().signInWithEmailAndPassword(values.email, values.password)
    .then(response=>{
        dispatch(authUser());
    })
    .catch(error=>{
        dispatch(authError(error));
    })
 }
}
 export function authUser(){
     return {
         type: AUTH_USER
     }
 }
 export function authError(error){
     return {
         type:AUTH_ERROR,
         payload: error
     }
 }
 export function signOutUser(){
     return {
         type: SIGN_OUT_USER
     }
 }