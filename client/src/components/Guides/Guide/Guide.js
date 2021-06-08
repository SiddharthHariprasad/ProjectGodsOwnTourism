import React from 'react';
import { Card, CardTitle, Icon } from 'react-materialize';

const Guide = ({ guide }) => {
    return (
        <Card 
            className="black teal-text text-accent-4 left-align"
            actions={[
                <a href="#!" className="teal-text text-accent-4" key="1"><Icon>add_shopping_cart</Icon>&nbsp;Add to Cart</a>
            ]}
            header={<CardTitle image={guide.guidePhoto}></CardTitle>}
        >
            <h4 className="white-text">{guide.guideName}</h4>
            <ul className="guide">
                <li><b>Languages Known: </b><br />{guide.guideLanguages.map((language) => (<span key={language}>&#128483;{language}&nbsp;</span>))}</li>
                <li><b>Experience: </b> {guide.guideExperience} years</li>
                <li><b>Age: </b> {guide.guideAge}</li>
                <li><b>Availability: </b> {guide.guideAvailability.map((availability) => (<span key={availability}>&#128197;{availability}&nbsp;</span>))}</li>
                <li className="white-text"><b>Cost: &#8377;{guide.guideCost}/8hrs</b></li>
            </ul>
        </Card>
    );
};

export default Guide;