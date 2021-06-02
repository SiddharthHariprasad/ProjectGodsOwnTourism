import { Link } from "react-router-dom";
import React from 'react';

const Pack = ({ pack }) => {
    return (
        <div className="card black white-text sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={pack.packPhoto} alt="Package Name"/>
            </div>
            <div className="card-content">
                <span className="card-title activator teal-text text-darken-2">{pack.packName}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-action">
                <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
            </div>
            <div className="card-reveal black teal-text text-lighten-2">
                <span className="card-title teal-text text-darken-2">{pack.packName}<i className="material-icons right">close</i></span>
                <p>Here is some more information about this package.<br /><br />
                        <b>Ticket ID: </b>{pack.ticketID}<br />
                        <b>Hotel ID: </b>{pack.hotelID}<br />
                        <b>Room ID: </b>{pack.roomID}<br />
                        <b>Cab ID: </b>{pack.cabID}<br />
                        <b>Guide ID: </b>{pack.guideID}<br />
                    <span><b>Availability: </b>{pack.packAvailability}</span><br /><br />
                    <span className="white-text"><b>Cost: &#8377;{pack.packCost}</b></span><br />
                </p>
            </div>
        </div>
    );
};

export default Pack;