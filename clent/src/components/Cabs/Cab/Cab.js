import React from 'react';
import { Link } from "react-router-dom";

const Cab = ({ cab }) => {
    return (
        <div className="card black teal-text">
            <div className="card-image">
                <img alt="cab" src={cab.driverPhoto} height="340px" />
            </div>
            <div className="card-content">
                <span className="card-title white-text">{cab.driverName}</span>
                <ul className="cab">
                    <li><b>Car: </b>{cab.carModel}</li>
                    <li><b>Languages Known: </b> {cab.driverLanguages}</li>
                    <li><b>Experience: </b> {cab.driverExperience} years</li>
                    <li><b>Age: </b> {cab.driverAge}</li>
                    <li><b>Availability: </b> {cab.driverAvailability}</li>
                    <li className="white-text"><b>Cost: &#8377;{cab.driverCost}/8hrs</b></li>
                </ul>
            </div>
            <div className="card-action">
                <Link to="#" className="teal-text">
                    <i className="material-icons small">add_shopping_cart</i>
                    Add to Cart
                </Link>
            </div>
        </div>
    );
};

export default Cab;