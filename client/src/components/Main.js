import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { getUsers } from './actions/users';
// import { getCarts } from './actions/carts';
// import { getOrders } from './actions/orders';

// Import all page components here
import MainPage from './MainPage';
import Packages from './Packages/Packages';
import Tickets from './Tickets/Tickets';
import Hotels from './Hotels/Hotels';
import Cabs from './Cabs/Cabs';
import Guides from './Guides/Guides';
import AboutUs from './AboutUs';
import ErrorPage from './ErrorPage';
import FormPack from './Form/FormPack';
import FormTicket from './Form/FormTicket';
import FormHotel from './Form/FormHotel';
import FormCab from './Form/FormCab';
import FormGuide from './Form/FormGuide';
import Auth from './Form/Auth';
import EditForm from './Form/EditForm';
import DeleteForm from './Form/DeleteForm';
// import FormCart from './components/Form/FormCart';
// import FormOrder from './components/Form/FormOrder';

// All routes go here. Don't forget to import the components above after adding new route.

const Main = () => {
    const [currentId, setCurrentId] = useState(null);
    const [currentRoomId, setCurrentRoomId] = useState(null);
    const [currentDeleteId, setCurrentDeleteId] = useState(null);
    const [currentDeleteRoomId, setCurrentDeleteRoomId] = useState(null);

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
                <FormPack currentId={currentId} setCurrentId={setCurrentId} currentDeleteId={currentDeleteId} setCurrentDeleteId={setCurrentDeleteId} />
            </Route>
            <Route path="/FormTicket">
                <FormTicket currentId={currentId} setCurrentId={setCurrentId} currentDeleteId={currentDeleteId} setCurrentDeleteId={setCurrentDeleteId} />
            </Route>
            <Route path="/FormHotel">
                <FormHotel currentId={currentId} setCurrentId={setCurrentId} currentRoomId={currentRoomId} setCurrentRoomId={setCurrentRoomId} currentDeleteId={currentDeleteId} setCurrentDeleteId={setCurrentDeleteId} currentDeleteRoomId={currentDeleteRoomId} setCurrentDeleteRoomId={setCurrentDeleteRoomId} />
            </Route>
            <Route path="/FormCab">
                <FormCab currentId={currentId} setCurrentId={setCurrentId} currentDeleteId={currentDeleteId} setCurrentDeleteId={setCurrentDeleteId} />
            </Route>
            <Route path="/FormGuide">
                <FormGuide currentId={currentId} setCurrentId={setCurrentId} currentDeleteId={currentDeleteId} setCurrentDeleteId={setCurrentDeleteId} />
            </Route>
            <Route path="/EditForm">
                <EditForm currentId={currentId} setCurrentId={setCurrentId} currentRoomId={currentRoomId} setCurrentRoomId={setCurrentRoomId} />
            </Route>
            <Route path="/DeleteForm">
                <DeleteForm currentDeleteId={currentDeleteId} setCurrentDeleteId={setCurrentDeleteId} currentDeleteRoomId={currentDeleteRoomId} setCurrentDeleteRoomId={setCurrentDeleteRoomId} />
            </Route>
            <Route path="/Auth" component={Auth}></Route>
            {/* <Route path="/FormCart" component={FormCart}></Route> */}
            {/* <Route path="/FormOrder" component={FormOrder}></Route> */}
            <Route component={ErrorPage}></Route>
        </Switch>
    );
}

export default Main;