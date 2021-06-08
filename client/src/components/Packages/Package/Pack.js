import React from 'react';
import { Card, CardTitle, Icon } from 'react-materialize';

const Pack = ({ pack }) => {
    return (
        <Card
            className="black teal-text text-accent-4"
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={pack.packPhoto} reveal waves="light">{pack.packName}</CardTitle>}
            reveal={
                <>
                    <span>Here is some more information about {pack.packName}.</span>
                    <ul>
                        <li><b>Ticket ID: </b>{pack.ticketID}</li>
                        <li><b>Hotel ID: </b>{pack.hotelID}</li>
                        <li><b>Room ID: </b>{pack.roomID}</li>
                        <li><b>Cab ID: </b>{pack.cabID}</li>
                        <li><b>Guide ID: </b>{pack.guideID}</li>
                    <li><b>Availability: </b>{pack.packAvailability}</li>
                    <li className="white-text"><b>Cost: &#8377;{pack.packCost}</b></li>
                </ul>
                </>}
            revealIcon={<Icon>more_vert</Icon>}
            title={pack.packName}
            actions={[
                <a href="#!" className="teal-text text-accent-4" key="1"><Icon>add_shopping_cart</Icon>&nbsp;Add to Cart</a>
            ]}
            >
               <span>{pack.packDetails}</span> 
        </Card>
    );
};

export default Pack;