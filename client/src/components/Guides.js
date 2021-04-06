import { Link } from "react-router-dom";
import guide1 from './images/guides/guide1.jpg';
import guide2 from './images/guides/guide2.jpg';
import guide3 from './images/guides/guide3.jpg';
import guide4 from './images/guides/guide4.jpg';

function Guides() {
    return(
        <div id="main-content">
            <div className="container">
                <h1 className="center">Guides</h1>
                <div className="row">
                <div className="col s12 m6">
                    <div className="card black teal-text">
                    <div className="card-image">
                        <img alt="guide" src={guide1} />
                    </div>
                    <div className="card-content">
                        <span className="card-title white-text">Guide Name</span>
                        <ul>
                        <li><b>Languages Known:</b> [Language 1] [Language 2] [Language 3]</li>
                        <li><b>Experience:</b> [Years]</li>
                        <li><b>Age:</b> [Age]</li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <Link to="#" className="teal-text">
                        <i className="material-icons small">add_shopping_cart</i>
                        Add to Cart
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card black teal-text">
                    <div className="card-image">
                        <img alt="guide" src={guide2} />
                    </div>
                    <div className="card-content">
                        <span className="card-title white-text">Guide Name</span>
                        <ul>
                        <li><b>Languages Known:</b> [Language 1] [Language 2] [Language 3]</li>
                        <li><b>Experience:</b> [Years]</li>
                        <li><b>Age:</b> [Age]</li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <Link to="#" className="teal-text">
                        <i className="material-icons small">add_shopping_cart</i>
                        Add to Cart
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card black teal-text">
                    <div className="card-image">
                        <img alt="guide" src={guide3} />
                    </div>
                    <div className="card-content">
                        <span className="card-title white-text">Guide Name</span>
                        <ul>
                        <li><b>Languages Known:</b> [Language 1] [Language 2] [Language 3]</li>
                        <li><b>Experience:</b> [Years]</li>
                        <li><b>Age:</b> [Age]</li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <Link to="#" className="teal-text">
                        <i className="material-icons small">add_shopping_cart</i>
                        Add to Cart
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card black teal-text">
                    <div className="card-image">
                        <img alt="guide" src={guide4} />
                    </div>
                    <div className="card-content">
                        <span className="card-title white-text">Guide Name</span>
                        <ul>
                        <li><b>Languages Known:</b> [Language 1] [Language 2] [Language 3]</li>
                        <li><b>Experience:</b> [Years]</li>
                        <li><b>Age:</b> [Age]</li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <Link to="#" className="teal-text">
                        <i className="material-icons small">add_shopping_cart</i>
                        Add to Cart
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Guides;