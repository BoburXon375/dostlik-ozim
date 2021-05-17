import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import "react-toastify/dist/ReactToastify.css"
import "./sass/main.scss";


import {createStore} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
