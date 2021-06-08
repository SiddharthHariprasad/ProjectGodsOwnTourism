import React from 'react';
import { Card, Icon } from 'react-materialize';

const Ticket = ({ ticket }) => {
    return (
        <Card
            actions={[
                <a href="#!" className="teal-text text-accent-4" key="1"><Icon>add_shopping_cart</Icon>&nbsp;Add to Cart</a>
            ]}
            className="black"
            textClassName="white-text"
        >
            <div className="ticket-title">
                <span><b>From:</b>&nbsp;<i>{ticket.departure}</i>&nbsp;&nbsp;----&gt;&nbsp;&nbsp;<b>To:</b> <i>{ticket.destination}</i></span>
                <br />
                <span className="white-text ticketType"><b>(&nbsp;{ticket.ticketType}&nbsp;)</b></span><br />
            </div>
            <div className="teal-text">
                <span><b>Departure Date: </b> {ticket.date} </span><br />
                <span><b>Departure Time: </b> {ticket.time} </span><br />
                <span><b>Seats Available: </b> {ticket.seatsAvailable} </span><br />
                <span className="white-text"><b>Cost: &#8377;{ticket.ticketCost} </b></span>
            </div>
        </Card>
    );
};

export default Ticket;