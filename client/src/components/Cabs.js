import { Link } from "react-router-dom";
import driver1 from './images/drivers/driver1.jpg';
import driver2 from './images/drivers/driver2.jpg';
import driver3 from './images/drivers/driver3.jpg';
import driver4 from './images/drivers/driver4.jpg';

function Cabs() {
    return(
        <div id="main-content">
            <div className="container">
                <h1 className="center">Cabs</h1>
                <div className="row">
                <div className="col s12 m6">
                    <div className="card black teal-text">
                    <div className="card-image">
                        <img alt="cab" src={driver1} />
                    </div>
                    <div className="card-content">
                        <span className="card-title white-text">Driver Name</span>
                        <ul>
                        <li><b>Car:</b> [Company] [Model Name] [Year]</li>
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
                        <img alt="cab" src={driver2} />
                    </div>
                    <div className="card-content">
                        <span className="card-title white-text">Driver Name</span>
                        <ul>
                        <li><b>Car:</b> [Company] [Model Name] [Year]</li>
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
                        <img alt="cab" src={driver3} />
                    </div>
                    <div className="card-content">
                        <span className="card-title white-text">Driver Name</span>
                        <ul>
                        <li><b>Car:</b> [Company] [Model Name] [Year]</li>
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
                        <img alt="cab" src={driver4} />
                    </div>
                    <div className="card-content">
                        <span className="card-title white-text">Driver Name</span>
                        <ul>
                        <li><b>Car:</b> [Company] [Model Name] [Year]</li>
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

export default Cabs;