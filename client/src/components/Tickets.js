import { Link } from "react-router-dom";

function Tickets() {
    return(
        <div id="main-content">
            <div className="container">
                <h1 className="center">Tickets</h1>
                <div className="row">
                <div className="col s12 m6">
                    <div className="card black">
                    <div className="card-content teal-text">
                        <span className="card-title white-text"><b>From:</b> <i>[location]</i> ----&gt; <b>To:</b> <i>Palakkad</i></span>
                        <span><b>Seats Available:</b> [number of seats available] </span>
                    </div>
                    <div className="card-action">
                        <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                    </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card black">
                    <div className="card-content teal-text">
                        <span className="card-title white-text"><b>From:</b> <i>[location]</i> ----&gt; <b>To:</b> <i>Palakkad</i></span>
                        <span><b>Seats Available:</b> [number of seats available] </span>
                    </div>
                    <div className="card-action">
                        <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                    </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card black">
                    <div className="card-content teal-text">
                        <span className="card-title white-text"><b>From:</b> <i>[location]</i> ----&gt; <b>To:</b> <i>Palakkad</i></span>
                        <span><b>Seats Available:</b> [number of seats available] </span>
                    </div>
                    <div className="card-action">
                        <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                    </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card black">
                    <div className="card-content teal-text">
                        <span className="card-title white-text"><b>From:</b> <i>[location]</i> ----&gt; <b>To:</b> <i>Palakkad</i></span>
                        <span><b>Seats Available:</b> [number of seats available] </span>
                    </div>
                    <div className="card-action">
                        <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Tickets;