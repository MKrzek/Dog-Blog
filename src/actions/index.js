import * as firebase from "firebase";

import { AUTH_USER } from "../constants.js";
import { AUTH_ERROR } from "../constants.js";
import { SIGN_OUT_USER } from "../constants.js";
import { NEW_ARTICLE } from "../constants.js";
import { DISPLAY_ARTICLES } from "../constants.js";
import { ADD_VET } from "../constants.js";
import { DISPLAY_VETS } from "../constants.js";
import { ADD_DOG_FRIENDLY } from "../constants.js";
import { DISPLAY_DOG_FRIENDLY } from "../constants.js";
import { DISPLAY_DFTAGS } from "../constants.js";
import { ADD_GALLERY } from "../constants.js";
import { DISPLAY_GALLERY } from "../constants.js";
import { ADD_VOTE } from "../constants.js";
import { BLOCK_VOTE } from "../constants.js";
import { ADD_ADOPTION } from "../constants.js";
import { DISPLAY_ADOPTION } from "../constants.js";
import { RESERVE_DOG } from "../constants.js";
import { OPEN_MODAL } from "../constants.js";
import { CLOSE_MODAL } from "../constants.js";
import { SEND_ADOPTION_MESSAGE } from "../constants.js";
import { DISPLAY_MESSAGES } from "../constants.js";
import { VET_LOCATION } from "../constants.js";
import { DELETE_MESSAGE } from "../constants.js";
import { DISPLAY_MY_ARTICLES } from "../constants.js";
import { DELETE_MY_ARTICLE } from "../constants.js";
import { SEND_DATA_TO_ARTICLE_DATA } from "../constants.js";

const config = {
  apiKey: "AIzaSyAW2Ju7jK7YGKn0qZtmCp7u7dTB2lvgJCs",
  authDomain: "dog-blog-50b2a.firebaseapp.com",
  databaseURL: "https://dog-blog-50b2a.firebaseio.com",
  projectId: "dog-blog-50b2a",
  storageBucket: "dog-blog-50b2a.appspot.com",
  messagingSenderId: "925286955795"
};

const firebaseApp = firebase.initializeApp(config);
const artDatabase = firebase.database().ref("newArticle");
const vetDatabase = firebase.database().ref("vets");
const galleryDatabase = firebase.database().ref("gallery");
const dogFriendlyDatabase = firebase.database().ref("dogFriendly");
const adoptionDatabase = firebase.database().ref("adoption");
const adoptionMessageDatabase = firebase.database().ref("adoptionMessage");

const articleStorage = firebase.storage().ref("articles");
const galleryStorage = firebase.storage().ref("gallery");
const adoptionStorage = firebase.storage().ref("adoption");

export function SignUpUser(credentials) {
  return function(dispatch) {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}
export function LogInUser(credentials) {
  return function(dispatch) {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}
export function signOutUser() {
  return function(dispatch) {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: SIGN_OUT_USER
        });
      });
  };
}

export function verifyAuth() {
  return function(dispatch) {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signOutUser());
      }
    });
  };
}

export function authUser() {
  return {
    type: AUTH_USER
  };
}
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function createNewArticle(article, callback) {
  const { title, picture, content } = article;
  const userUiD = firebase.auth().currentUser.uid;
  const id = `${userUiD}${new Date().getTime()}`;
  return function(dispatch) {
    articleStorage
      .child(`images/${id}`)
      .put(picture[0])
      .then(snapshot => {
        artDatabase.push({
          id,
          userUiD,
          title,
          content,
          picture: snapshot.metadata.downloadURLs[0]
        });
      });
    callback();
    dispatch({
      type: NEW_ARTICLE,
      payload: article
    });
  };
}

export function displayArticles() {
  return function(dispatch) {
    artDatabase.on("value", snapshot => {
      dispatch({
        type: DISPLAY_ARTICLES,
        payload: snapshot.val()
      });
    });
  };
}

export function addVet(values, callback) {
  const { vet, streetName, streetNumber, phone, www, city } = values;
  const userUiD = firebase.auth().currentUser.uid;
  return function(dispatch) {
    vetDatabase.push({
      userUiD,
      vet,
      streetName,
      streetNumber,
      phone,
      www,
      city
    });
    callback();
    dispatch({
      type: ADD_VET,
      payload: values
    });
  };
}
export function displayVets() {
  return function(dispatch) {
    vetDatabase.on("value", snapshot => {
      dispatch({
        type: DISPLAY_VETS,
        payload: snapshot.val()
      });
    });
  };
}

export function addDogFriendly(values, callback) {
  const { place, tags, description, www } = values;
  const userUiD = firebase.auth().currentUser.uid;
  return function(dispatch) {
    dogFriendlyDatabase.push({ userUiD, place, tags, description, www });
    callback();
    dispatch({
      type: ADD_DOG_FRIENDLY,
      payload: values
    });
  };
}

export function displayDogFriendly() {
  return function(dispatch) {
    dogFriendlyDatabase.on("value", snapshot => {
      dispatch({
        type: DISPLAY_DOG_FRIENDLY,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchDfTags(values) {
  const value = values.searchBar;
  return function(dispatch) {
    dogFriendlyDatabase
      .orderByChild("tags")
      .equalTo(value)
      .on("value", snapshot => {
        dispatch({
          type: DISPLAY_DFTAGS,
          payload: snapshot.val()
        });
      });
  };
}

export function addGallery(values, callback) {
  const { name, picture } = values;
  const userUiD = firebase.auth().currentUser.uid;
  const id = `${userUiD}${new Date().getTime()}`;
  const votes = 0;
  return function(dispatch) {
    galleryStorage
      .child(`images/${id}`)
      .put(picture[0])
      .then(snapshot => {
        galleryDatabase.push({
          id,
          votes,
          name,
          userUiD,
          picture: snapshot.metadata.downloadURLs[0]
        });
      });
    callback();
    dispatch({
      type: ADD_GALLERY,
      payload: values
    });
  };
}

export function displayGallery() {
  return dispatch => {
    galleryDatabase.on("value", snapshot => {
      dispatch({
        type: DISPLAY_GALLERY,
        payload: snapshot.val()
      });
    });
  };
}

export function addVote(counter, key) {
  return dispatch => {
    galleryDatabase.child(key).update({
      votes: counter
    });
    dispatch({
      type: ADD_VOTE,
      payload: counter
    });
  };
}

export function castVote(voted) {
  return dispatch => {
    dispatch({
      type: BLOCK_VOTE,
      payload: voted
    });
  };
}

export function addAdoption(values, callback) {
  const { name, breed, picture } = values;
  const userUiD = firebase.auth().currentUser.uid;
  const id = `${userUiD}${new Date().getTime()}`;
  return dispatch => {
    adoptionStorage
      .child(`images/${id}`)
      .put(picture[0])
      .then(snapshot => {
        adoptionDatabase.push({
          id,
          name,
          adoption: "reserve",
          breed,
          userUiD,
          picture: snapshot.metadata.downloadURLs[0]
        });
        callback();
        dispatch({
          type: ADD_ADOPTION,
          payload: values
        });
      });
  };
}

export function displayAdoption() {
  return dispatch => {
    adoptionDatabase.on("value", snapshot => {
      dispatch({
        type: DISPLAY_ADOPTION,
        payload: snapshot.val()
      });
    });
  };
}

export function reserveDog(data, key) {
  return dispatch => {
    adoptionDatabase.child(key).update({
      adoption: data
    });
    dispatch({
      type: RESERVE_DOG,
      payload: data
    });
  };
}

export function openModal(dog) {
  return dispatch => {
    dispatch({
      type: OPEN_MODAL,
      payload: dog
    });
  };
}

export function closeModal() {
  return dispatch => {
    dispatch({
      type: CLOSE_MODAL
    });
  };
}

export function adoptMessage(values, ownerUiD) {
  const { name, phone, message } = values;
  const userUiD = firebase.auth().currentUser.uid;
  const data = { values, ownerUiD, userUiD };

  return dispatch => {
    adoptionMessageDatabase.push({ userUiD, ownerUiD, name, phone, message });
    dispatch({
      type: SEND_ADOPTION_MESSAGE,
      payload: data
    });
  };
}

export function displayMessages() {
  const userUiD = firebase.auth().currentUser.uid;
  return dispatch => {
    adoptionMessageDatabase
      .orderByChild("ownerUiD")
      .equalTo(userUiD)
      .on("value", snapshot => {
        dispatch({
          type: DISPLAY_MESSAGES,
          payload: snapshot.val()
        });
      });
  };
}

export function vetLocation(geoLocation) {
  return dispatch => {
    dispatch({
      type: VET_LOCATION,
      payload: geoLocation
    });
  };
}

export function deleteMessage(key) {
  return dispatch => {
    adoptionMessageDatabase.child(key).remove();
    dispatch({
      type: DELETE_MESSAGE
    });
  };
}

export function displayMyArticles() {
  const userUiD = firebase.auth().currentUser.uid;
  return dispatch => {
    artDatabase
      .orderByChild("userUiD")
      .equalTo(userUiD)
      .on("value", snapshot => {
        dispatch({
          type: DISPLAY_MY_ARTICLES,
          payload: snapshot.val()
        });
      });
  };
}
export function deleteArticle(key) {
  return dispatch => {
    artDatabase.child(key).remove();
    dispatch({
      type: DELETE_MY_ARTICLE
    });
  };
}
export function SendDataToArticleData(article) {
  return dispatch => {
    dispatch({
      type: SEND_DATA_TO_ARTICLE_DATA,
      payload: article
    });
  };
}
