import React from 'react';
import { Card, CardTitle, Icon } from 'react-materialize';

const Hotel = ({ hotel }) => {
    
    return (
        <Card
            className="black teal-text text-accent-4"
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={hotel.hotelPhoto} alt="hotel" reveal waves="light">{hotel.hotelName}</CardTitle>}
            reveal={
                <>
                    <img alt="room" src={hotel.roomPhoto}  width="100%"/>
                    <b>Facilities: </b><ul>{hotel.facilities.map((facility) => (<li key={facility}>&#9899;{facility}</li>))}</ul>
                    <span className="white-text"><b>Cost: &#8377;{hotel.roomCost}</b></span>
                </>}
            revealIcon={<Icon>more_vert</Icon>}
            title={`${hotel.roomType} Room`}
            actions={[
                <a href="#!" className="teal-text text-accent-4" key="1"><Icon>add_shopping_cart</Icon>&nbsp;Add to Cart</a>
            ]}
            >
                {hotel.hotelDetails}
        </Card>
    );
};

export default Hotel;