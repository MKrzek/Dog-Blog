import * as firebase from 'firebase';
import {AUTH_USER} from '../constants.js';
import {AUTH_ERROR} from '../constants.js';
import {SIGN_OUT_USER} from '../constants.js';
import {NEW_ARTICLE} from'../constants.js';
import {DISPLAY_ARTICLES} from '../constants.js';
import {ADD_VET} from '../constants.js';
import {DISPLAY_VETS} from '../constants.js';
import {ADD_DOG_FRIENDLY} from '../constants.js'

const config = {
apiKey : "AIzaSyAW2Ju7jK7YGKn0qZtmCp7u7dTB2lvgJCs",
authDomain : "dog-blog-50b2a.firebaseapp.com",
databaseURL : "https://dog-blog-50b2a.firebaseio.com",
projectId : "dog-blog-50b2a",
storageBucket : "dog-blog-50b2a.appspot.com",
messagingSenderId : "925286955795"
};

const firebaseApp=firebase.initializeApp(config);
const artDatabase=firebase.database().ref('newArticle');
const vetDatabase=firebase.database().ref('vets');
const dogFriendlyDatabase=firebase.database().ref('dogFriendly')
const storage=firebase.storage().ref();


export function SignUpUser(credentials){
     return function (dispatch){
    firebaseApp.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(response=>{
        dispatch(authUser());
    })
    .catch(error=>{
        
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

 export function createNewArticle(article, callback){
     const {title, picture, content}=article;
     const userUiD=firebase.auth().currentUser.uid;
     const id=`${userUiD}${new Date().getTime()}`
     return function (dispatch){
         storage.child(`images/${id}`).put(picture[0])
         .then((snapshot)=>{
         artDatabase.push({id: id, title: title, content: content, picture:snapshot.metadata.downloadURLs[0]})
         })
         callback()
         dispatch({
                 type: NEW_ARTICLE,
                 payload: article
             })     
    }
};


export function displayArticles() {
    return function (dispatch) {
        artDatabase.on('value', snapshot => {
            
            dispatch({
                type: DISPLAY_ARTICLES,
                payload: snapshot.val(),
            });

        });
    }
};

export function addVet(values, callback){
    const {vet, streetName, streetNumber, phone, www }=values
     const userUiD=firebase.auth().currentUser.uid;
     return function(dispatch){
         vetDatabase.push({userUiD: userUiD,  vet: vet, streetName: streetName, streetNumber: streetNumber, phone: phone, www: www})
     callback()
     dispatch({
         type: ADD_VET,
         payload: values
     })
    }
}
export function displayVets(){
    return function (dispatch){
        vetDatabase.on ('value', snapshot=>{
            dispatch({
                type: DISPLAY_VETS,
                payload: snapshot.val()
            })
        })
    }
}

export function addDogFriendly(values, callback){
    const {place,tags, description, www}=values;
     const userUiD = firebase.auth().currentUser.uid;
    return function (dispatch){
        dogFriendlyDatabase.push({ userUiD: userUiD, place: place, tags: tags, description: description, www: www})
        callback()
        dispatch({
            type: ADD_DOG_FRIENDLY,
            payload: values
        })
    }
}