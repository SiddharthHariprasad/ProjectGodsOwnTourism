import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets, putTicket, updateTicket } from '../../actions/tickets'

const FormTicket = ({ currentId, setCurrentId }) => {

    const [ticketData, setTicketData] = useState({
        ticketID: '', ticketType: '', departure: '', destination: '', seatsAvailable: '', date: '', time: '', ticketCost: '',
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch]);

    const ticket = useSelector((state) => currentId ? state.tickets.find((g) => g.ticketID === currentId) : null);

    const tickets = useSelector((state) => state.tickets);

    useEffect(() => {
        if (ticket) setTicketData(ticket);
    }, [ticket])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        function formater() {
            ticketData.ticketID = ticketData.ticketID.toUpperCase();
            ticketData.time = ticketData.time.toUpperCase();
            ticketData.date = capitalize(ticketData.date);
            ticketData.ticketType = capitalize(ticketData.ticketType);
            ticketData.departure = capitalize(ticketData.departure);
            ticketData.destination = capitalize(ticketData.destination);

            function capitalize(input) {  
                var words = input.split(' ');  
                var CapitalizedWords = [];  
                words.forEach(element => {  
                    CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length).toLowerCase());  
                });  
                return CapitalizedWords.join(' ');  
            }  
        }
        
        function validate() {
            const fields = [ticketData.ticketID, ticketData.time, ticketData.date, ticketData.ticketType, ticketData.departure, ticketData.destination, ticketData.ticketCost]
            var index = 0;
            if(ticketData.ticketID && ticketData.time && ticketData.date && ticketData.ticketType && ticketData.departure && ticketData.destination && ticketData.ticketCost) {
                index = 0;
                fields.forEach(element => {
                    if (element !== '') {
                        const warningID = 'warning' + index;
                        const warning = document.getElementById(warningID);
                        warning.setAttribute('hidden','')
                    }
                    index = index + 1;
                });
                return true;
            } else {
                index = 0;
                fields.forEach(element => {
                    if (element === '') {
                        const warningID = 'warning' + index;
                        const warning = document.getElementById(warningID);
                        warning.style.setProperty('color', 'red');
                        warning.removeAttribute('hidden');
                    } else if (element !== '') {
                        const warningID = 'warning' + index;
                        const warning = document.getElementById(warningID);
                        warning.setAttribute('hidden','');
                    }
                    index = index + 1;
                });
                return false;
            }
        }

        const validated = validate();
        var updateSuccess = document.getElementById('updateSuccess');
        var createSuccess = document.getElementById('createSuccess');
        if(currentId && validated) {
            dispatch(updateTicket(currentId, ticketData));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => updateSuccess.setAttribute('hidden',""), 3000);
            clear();
        } else if(validated) {
            formater();
            const ticketExistCheck = tickets.find((c) => c.ticketID === ticketData.ticketID)? true : false;
            if (ticketExistCheck) {
                alert('Ticket with the same Ticket ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putTicket(ticketData));
                createSuccess.removeAttribute('hidden');
                setTimeout(() => createSuccess.setAttribute('hidden',""), 3000);
                clear();
            }
        }
    };

    const clear = () => {
        window.open("/FormTicket","_self");
    };

    return (
        ticket !== null && ticketData.ticketID ==='' ?  
            <div id="main-content" className="loaderPage">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-teal-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div> 
            </div>
        : (
            <div id="main-content">
                <div className="container">
                    <div id="updateSuccess" className="success" hidden>Ticket Updated Sucessfully!</div>
                    <div id="createSuccess" className="success" hidden>Ticket Created Sucessfully!</div>
                    <h1 className="center">Input Form</h1>
                    <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="ticketID">Ticket ID</label>
                            <input placeholder="Enter Ticket ID" className="validate" id="ticketID" type="text" value={ticketData.ticketID} onChange={(e) => setTicketData({ ...ticketData, ticketID: e.target.value })} /><br/>
                            <span id="warning0" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="ticketType">Ticket Type</label>
                            <input placeholder="Enter Ticket Type" className="validate" id="ticketType" type="text" value={ticketData.ticketType} onChange={(e) => setTicketData({ ...ticketData, ticketType: e.target.value })} /><br/>
                            <span id="warning1" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="departure">Departure</label>
                            <input placeholder="Enter Departure" className="validate" id="departure" type="text" value={ticketData.departure} onChange={(e) => setTicketData({ ...ticketData, departure: e.target.value })} /><br/>
                            <span id="warning2" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="destination">Destination</label>
                            <input placeholder="Enter Destination" className="validate" id="destination" type="text" value={ticketData.destination} onChange={(e) => setTicketData({ ...ticketData, destination: e.target.value })} /><br/>
                            <span id="warning3" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="seatsAvailable">Seats Available</label>
                            <input placeholder="Enter Seats Available" className="validate" id="seatsAvailable" type="number" value={ticketData.seatsAvailable} onChange={(e) => setTicketData({ ...ticketData, seatsAvailable: e.target.value })} /><br/>
                            <span id="warning4" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="date">Date</label>
                            <input placeholder="Enter Date" className="validate" id="date" type="text" value={ticketData.date} onChange={(e) => setTicketData({ ...ticketData, date: e.target.value })} /><br/>
                            <span id="warning5" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="time">Time</label>
                            <input placeholder="Enter Time" className="validate" id="time" type="text" value={ticketData.time} onChange={(e) => setTicketData({ ...ticketData, time: e.target.value })} /><br/>
                            <span id="warning6" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="ticketCost">Cost</label>
                            <input placeholder="Enter Cost per day" className="validate" id="ticketCost" type="number" value={ticketData.ticketCost} onChange={(e) => setTicketData({ ...ticketData, ticketCost : e.target.value })} /><br/>
                            <span id="warning7" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>&nbsp;
                            <button className="btn waves-effect waves-light" onClick={clear}>Clear
                                <i className="material-icons right">refresh</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default FormTicket;