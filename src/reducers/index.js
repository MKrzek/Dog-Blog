import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form';
import AuthReducer from './reducer_auth.js';
import NewArticleReducer from './reducer_newArticle.js';
import DisplayArticle from './reducer_displayArt.js';
import AddVet from './reducer_addVet.js';
import DisplayVets from './reducer_displayVets.js';
import AddDogFriendly from './reducer_addDogFriendly.js';
import DisplayDogFriendly from './reducer_displayDogFriendly.js';
import AddGallery from './reducer_addGallery.js';
import DisplayGallery from './reducer_displayGallery.js';
import AddVote from './reducer_addVote.js';
import BlockVote from './reducer_blockVote.js';
import AddAdoption from './reducer_addAdoption.js';
import DisplayAdoption from './reducer_displayAdoption.js';
import ReserveDog from './reducer_reserveDog.js';
import ModalReducer from './reducer_modal.js';
import SendAdoptionMessage from './reducer_sendAdoptMessage.js';
import DisplayMessages from './reducer_displayMessages.js';
import VetLocation from './reducer_vetLocation.js';
import DeleteMessage from './reducer_deleteMessage.js';
import DisplayMyArticles from './reducer_myArticles.js';
import DeleteMyArticle from './reducer_deleteMyArticle.js';
import SendDataToArticleData from './reducer_sendDataToArticleData.js';

const rootReducer=combineReducers({
    form: FormReducer,
    auth: AuthReducer,
    router: routerReducer,
    newArticle: NewArticleReducer,
    displayArticle: DisplayArticle,
    newVet: AddVet,
    displayVets: DisplayVets,
    addDogFriendly: AddDogFriendly,
    displayDogFriendly: DisplayDogFriendly,
    addGallery: AddGallery,
    displayGallery: DisplayGallery,
    addVote: AddVote,
    blockVote: BlockVote,
    addAdoption: AddAdoption,
    displayAdoption: DisplayAdoption,
    reserveDog: ReserveDog,
    modal: ModalReducer,
    sendAdoptMessage: SendAdoptionMessage,
    displayMessages: DisplayMessages,
    vetLocation: VetLocation,
    deleteMessage: DeleteMessage,
    myArticles: DisplayMyArticles,
    deleteMyArticle: DeleteMyArticle,
    sendDataToArticleData: SendDataToArticleData
    
})
export default rootReducer;