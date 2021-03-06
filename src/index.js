import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"
import {theme} from "./ch/ch"
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
let store = createStore(reducers, window.initialStoreData ? window.initialStoreData : {}, applyMiddleware(...middleware));


ReactDOM.render(
    <ChakraProvider theme={theme}>
         
        <BrowserRouter>
            <App/>
        </BrowserRouter>
   
    </ChakraProvider>
   
    ,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
