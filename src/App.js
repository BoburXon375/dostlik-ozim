import React from 'react';
import {ToastContainer} from "react-toastify"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NewsView from "./pages/NewsView";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route patch="/" exact component={Home}/>

                <Route patch="/news-view" component={NewsView}/>
            </Switch>
            <Footer/>


            <ToastContainer/>
        </BrowserRouter>
    );
};

export default App;