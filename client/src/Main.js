import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import all page components here
import MainPage from './components/MainPage';
import Packages from './components/Packages';
import Tickets from './components/Tickets';
import Hotels from './components/Hotels';
import Cabs from './components/Cabs';
import Guides from './components/Guides';
import AboutUs from './components/AboutUs';
import ErrorPage from './components/ErrorPage';
// All routes go here. Don't forget to import the components above after adding new route.

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route path="/Packages" component={Packages}></Route>
            <Route path="/Tickets" component={Tickets}></Route>
            <Route path="/Hotels" component={Hotels}></Route>
            <Route path="/Cabs" component={Cabs}></Route>
            <Route path="/Guides" component={Guides}></Route>
            <Route path="/AboutUs" component={AboutUs}></Route>
            <Route path="/ErrorPage" component={ErrorPage}></Route>
        </Switch>
    );
}

export default Main;