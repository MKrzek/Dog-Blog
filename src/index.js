import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './store.js';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App.js';
import './index.css';

const store=configureStore();
console.log('store', store)
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'));

registerServiceWorker();
