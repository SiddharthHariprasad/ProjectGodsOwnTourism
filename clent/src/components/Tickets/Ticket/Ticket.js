import { Link } from "react-router-dom";
import React from 'react';

const Ticket = ({ ticket }) => {
    return (
        <div className="card black">
                <div className="card-title white-text">
                    <span><b>From:</b>&nbsp;<i>{ticket.departure}</i>&nbsp;&nbsp;----&gt;&nbsp;&nbsp;<b>To:</b> <i>{ticket.destination}</i></span><br />
                    <span className="white-text ticketType"><b>(&nbsp;{ticket.ticketType}&nbsp;)</b></span><br />
                </div>
                <div className="card-content teal-text">
                <span><b>Departure Date: </b> {ticket.date} </span><br />
                <span><b>Departure Time: </b> {ticket.time} </span><br />
                <span><b>Seats Available: </b> {ticket.seatsAvailable} </span><br />
                <span className="white-text"><b>Cost: &#8377;{ticket.ticketCost} </b></span>
            </div>
            <div className="card-action">
                <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
            </div>
        </div>
    );
};

export default Ticket;