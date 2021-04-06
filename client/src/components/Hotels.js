import { Link } from "react-router-dom";
import hotel1 from './images/hotels/hotel1.jpg';
import hotel2 from './images/hotels/hotel2.jpg';
import hotel3 from './images/hotels/hotel3.jpg';
import hotel4 from './images/hotels/hotel4.jpg';
import rt1 from './images/hotels/room/rt1.jpg';
import rt2 from './images/hotels/room/rt2.jpg';
import rt3 from './images/hotels/room/rt3.jpg';
import rt4 from './images/hotels/room/rt4.jpg';
import rt5 from './images/hotels/room/rt5.jpg';
import rt6 from './images/hotels/room/rt6.jpg';
import rt7 from './images/hotels/room/rt7.jpg';
import rt8 from './images/hotels/room/rt8.jpg';
import rt9 from './images/hotels/room/rt9.jpg';
import rt10 from './images/hotels/room/rt10.jpg';
import rt11 from './images/hotels/room/rt11.jpg';
import rt12 from './images/hotels/room/rt12.jpg';

function Hotels() {
    return(
        <div id="main-content">
            <div className="container">
                <h1 className="center">Hotels</h1>
                <div className="row">
                <div className="col s12 m6">
                    <div className="card black teal-text">
                    <div className="card-content center">
                        <span className="hotel-card-title"><b>Hotel Name</b></span><br />
                        <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati soluta eveniet optio ab animi itaque explicabo consequuntur eaque laborum, quod eum, ducimus quisquam magnam facilis quis vitae maiores aliquid?
                        </span>
                        <div className="card-image">
                        <img alt="hotel" src={hotel1} />
                        </div>
                    </div>
                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width black">
                        <li className="tab"><Link className="active teal-text" to="#room1">[Room Type]</Link></li>
                        <li className="tab"><Link className="teal-text" to="#room2">[Room Type]</Link></li>
                        <li className="tab"><Link className="teal-text" to="#room3">[Room Type]</Link></li>
                        </ul>
                    </div>
                    <div className="card-content black">
                        <div id="room1">
                        <div className="card-image">
                            <img alt="room" src={rt1} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                        <div id="room2">
                        <div className="card-image">
                            <img alt="room" src={rt2} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                        <div id="room3">
                        <div className="card-image">
                            <img alt="room" src={rt3} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card black teal-text">
                    <div className="card-content center">
                        <span className="hotel-card-title"><b>Hotel Name</b></span><br />
                        <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati soluta eveniet optio ab animi itaque explicabo consequuntur eaque laborum, quod eum, ducimus quisquam magnam facilis quis vitae maiores aliquid?
                        </span>
                        <div className="card-image">
                        <img alt="hotel" src={hotel2} />
                        </div>
                    </div>
                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width black">
                        <li className="tab"><Link className="active teal-text" to="#room4">[Room Type]</Link></li>
                        <li className="tab"><Link className="teal-text" to="#room5">[Room Type]</Link></li>
                        <li className="tab"><Link className="teal-text" to="#room6">[Room Type]</Link></li>
                        </ul>
                    </div>
                    <div className="card-content black">
                        <div id="room4">
                        <div className="card-image">
                            <img alt="room" src={rt4} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                        <div id="room5">
                        <div className="card-image">
                            <img alt="room" src={rt5} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                        <div id="room6">
                        <div className="card-image">
                            <img alt="room" src={rt6} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card black teal-text">
                    <div className="card-content center">
                        <span className="hotel-card-title"><b>Hotel Name</b></span><br />
                        <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati soluta eveniet optio ab animi itaque explicabo consequuntur eaque laborum, quod eum, ducimus quisquam magnam facilis quis vitae maiores aliquid?
                        </span>
                        <div className="card-image">
                        <img alt="hotel" src={hotel3} />
                        </div>
                    </div>
                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width black">
                        <li className="tab"><Link className="active teal-text" to="#room7">[Room Type]</Link></li>
                        <li className="tab"><Link className="teal-text" to="#room8">[Room Type]</Link></li>
                        <li className="tab"><Link className="teal-text" to="#room9">[Room Type]</Link></li>
                        </ul>
                    </div>
                    <div className="card-content black">
                        <div id="room7">
                        <div className="card-image">
                            <img alt="room" src={rt7} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                        <div id="room8">
                        <div className="card-image">
                            <img alt="room" src={rt8} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                        <div id="room9">
                        <div className="card-image">
                            <img alt="room" src={rt9} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card black teal-text">
                    <div className="card-content center">
                        <span className="hotel-card-title"><b>Hotel Name</b></span><br />
                        <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati soluta eveniet optio ab animi itaque explicabo consequuntur eaque laborum, quod eum, ducimus quisquam magnam facilis quis vitae maiores aliquid?
                        </span>
                        <div className="card-image">
                        <img alt="hotel" src={hotel4} />
                        </div>
                    </div>
                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width black">
                        <li className="tab"><Link className="active teal-text" to="#room10">[Room Type]</Link></li>
                        <li className="tab"><Link className="teal-text" to="#room11">[Room Type]</Link></li>
                        <li className="tab"><Link className="teal-text" to="#room12">[Room Type]</Link></li>
                        </ul>
                    </div>
                    <div className="card-content black">
                        <div id="room10">
                        <div className="card-image">
                            <img alt="room" src={rt10} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                        <div id="room11">
                        <div className="card-image">
                            <img alt="room" src={rt11} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                        <div id="room12">
                        <div className="card-image">
                            <img alt="room" src={rt12} />
                        </div>
                        <ul>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                            <li>[Facility]</li>
                        </ul>
                        <div className="card-action">
                            <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Hotels;