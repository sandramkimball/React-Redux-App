import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
// import rootReducer from './reducer'
import {Provider} from 'react-redux';
import thunk from 'react-thunk';

import './index.css';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));



const rootElement = document.getElemendById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
rootElement
);


