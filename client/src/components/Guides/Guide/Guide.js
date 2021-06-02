import React from 'react';
import { Link } from "react-router-dom";

const Guide = ({ guide }) => {
    return (
        <div className="card black teal-text">
            <div className="card-image">
                <img alt="guide" src={guide.guidePhoto} height="340px" />
            </div>
            <div className="card-content guide">
                <span className="card-title white-text">{guide.guideName}</span>
                <ul>
                    <li><b>Languages Known: </b> {guide.guideLanguages}</li>
                    <li><b>Experience: </b> {guide.guideExperience} years</li>
                    <li><b>Age:</b> {guide.guideAge}</li>
                    <li><b>Availability: </b> {guide.guideAvailability}</li>
                    <li className="white-text"><b>Cost: &#8377;{guide.guideCost}/8hrs</b></li>
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

export default Guide;