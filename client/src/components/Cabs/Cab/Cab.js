import React from 'react';
import { Card, CardTitle, Icon } from 'react-materialize';

const Cab = ({ cab }) => {
    return (
        <Card 
            className="black teal-text text-accent-4 left-align"
            actions={[
                <a href="#!" className="teal-text text-accent-4" key="1"><Icon>add_shopping_cart</Icon>&nbsp;Add to Cart</a>
            ]}
            header={<CardTitle image={cab.driverPhoto}></CardTitle>}
        >
            <h4 className="white-text">{cab.driverName}</h4>
            <ul className="cab">
                <li><b>Car: </b>{cab.carModel}</li>
                <li><b>Languages Known: </b><br/>{cab.driverLanguages.map((language) => (<span key={language}>&#128483;{language}&nbsp;</span>))}</li>
                <li><b>Experience: </b> {cab.driverExperience} years</li>
                <li><b>Age: </b> {cab.driverAge}</li>
                <li><b>Availability: </b><br />{cab.driverAvailability.map((availability) => (<span key={availability}>&#128197;{availability}&nbsp;</span>))}</li>
                <li className="white-text"><b>Cost: &#8377;{cab.driverCost}/8hrs</b></li>
            </ul>
        </Card>
    );
};

export default Cab;