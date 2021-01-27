import React from 'react';
import { reducer } from "./reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/OMG';
import Router from './Router'
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();