import React from 'react';
import { Link } from "react-router-dom";

const Hotel = ({ hotel }) => {
    return (
        <div className="card black teal-text">
            <div className="card-image">
                <img alt="hotel" src={hotel.hotelPhoto}  height="340px" />
            </div>
            <div className="card-content center">
                <span className="hotel-card-title"><b>{hotel.hotelName}</b></span><br />
                <span>{hotel.hotelDetails}</span><br />
                <span className="hotel-card-title">{hotel.roomType} Room</span>
            </div>
            <div className="card-image">
                <img alt="room" src={hotel.roomPhoto}  height="340px" />
            </div>
            <div className="card-content center">
                <span><b>Facilities: </b>{hotel.facilities}</span><br />
                <span className="white-text"><b>Cost: &#8377;{hotel.roomCost}</b></span>
                <div className="card-action">
                    <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Hotel;