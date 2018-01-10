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

export function SignUpUser(credentials){
     return function (dispatch){
    firebaseApp.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(response=>{
        dispatch(authUser());
    })
    .catch(error=>{
        console.log('errror in action', error)
        dispatch(authError(error));
    })
 };
}
 export function LogInUser(credentials){
    return function (dispatch){
    firebaseApp.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(response=>{
        dispatch(authUser());
    })
    .catch(error=>{
        dispatch(authError(error));
    })
 }
}
export function signOutUser() {
    return function (dispatch) {
        firebaseApp.auth().signOut()
            .then(() => {
                dispatch({
                    type: SIGN_OUT_USER
                })
            });

    }
};

export function verifyAuth() {
    return function (dispatch) {
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(authUser());
            } else {
                dispatch(signOutUser());
            }
        })
    }
};


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
 