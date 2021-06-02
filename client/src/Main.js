import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { getUsers } from './actions/users';
// import { getCarts } from './actions/carts';
// import { getOrders } from './actions/orders';

// Import all page components here
import MainPage from './components/MainPage';
import Packages from './components/Packages/Packages';
import Tickets from './components/Tickets/Tickets';
import Hotels from './components/Hotels/Hotels';
import Cabs from './components/Cabs/Cabs';
import Guides from './components/Guides/Guides';
import AboutUs from './components/AboutUs';
import ErrorPage from './components/ErrorPage';
import FormPack from './components/Form/FormPack';
import FormTicket from './components/Form/FormTicket';
import FormHotel from './components/Form/FormHotel';
import FormCab from './components/Form/FormCab';
import FormGuide from './components/Form/FormGuide';
import SignUp from './components/Form/SignUp';
import EditForm from './components/Form/EditForm';
import DeleteForm from './components/Form/DeleteForm';
// import FormCart from './components/Form/FormCart';
// import FormOrder from './components/Form/FormOrder';

// All routes go here. Don't forget to import the components above after adding new route.

const Main = () => {
    const [currentId, setCurrentId] = useState(null);
    const [currentRoomId, setCurrentRoomId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getUsers());
        // dispatch(getCarts());
        // dispatch(getOrders());
    }, [dispatch]);

    return (
        <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route path="/Packages" component={Packages}></Route>
            <Route path="/Tickets" component={Tickets}></Route>
            <Route path="/Hotels" component={Hotels}></Route>
            <Route path="/Cabs" component={Cabs}></Route>
            <Route path="/Guides" component={Guides}></Route>
            <Route path="/AboutUs" component={AboutUs}></Route>
            <Route path="/FormPack">
                <FormPack currentId={currentId} setCurrentId={setCurrentId} />
            </Route>
            <Route path="/FormTicket">
                <FormTicket currentId={currentId} setCurrentId={setCurrentId} />
            </Route>
            <Route path="/FormHotel">
                <FormHotel currentId={currentId} setCurrentId={setCurrentId} currentRoomId={currentRoomId} setCurrentRoomId={setCurrentRoomId} />
            </Route>
            <Route path="/FormCab">
                <FormCab currentId={currentId} setCurrentId={setCurrentId} />
            </Route>
            <Route path="/FormGuide">
                <FormGuide currentId={currentId} setCurrentId={setCurrentId} />
            </Route>
            <Route path="/EditForm">
                <EditForm currentId={currentId} setCurrentId={setCurrentId} currentRoomId={currentRoomId} setCurrentRoomId={setCurrentRoomId} />
            </Route>
            <Route path="/DeleteForm">
                <DeleteForm currentId={currentId} setCurrentId={setCurrentId} currentRoomId={currentRoomId} setCurrentRoomId={setCurrentRoomId} />
            </Route>
            <Route path="/SignUp" component={SignUp}></Route>
            {/* <Route path="/FormCart" component={FormCart}></Route> */}
            {/* <Route path="/FormOrder" component={FormOrder}></Route> */}
            <Route component={ErrorPage}></Route>
        </Switch>
    );
}

export default Main;