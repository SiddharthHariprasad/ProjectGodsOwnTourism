import { Link } from "react-router-dom";
import pack1 from './images/packages/pack1.jpg';
import pack2 from './images/packages/pack2.jpg';
import pack3 from './images/packages/pack3.jpg';
import pack4 from './images/packages/pack4.jpg';

function Packages() {
  return(
    <div id="main-content">
      <div className="container">
        <h1 className="center">Packages</h1>
        <div className="row">
          <div className="col s12 m6">
            <div className="card black white-text sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={pack1} alt="Package Name"/>
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text text-darken-2">Package Name<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-action">
                <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
              </div>
              <div className="card-reveal black teal-text text-lighten-2">
                <span className="card-title teal-text text-darken-2">Package Name<i className="material-icons right">close</i></span>
                <p>Here is some more information about this package.</p>
                <ul>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card black white-text sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={pack2} alt="Package Name"/>
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text text-darken-2">Package Name<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-action">
                <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
              </div>
              <div className="card-reveal black teal-text text-lighten-2">
                <span className="card-title teal-text text-darken-2">Package Name<i className="material-icons right">close</i></span>
                <p>Here is some more information about this package.</p>
                <ul>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card black white-text sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={pack3} alt="Package Name"/>
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text text-darken-2">Package Name<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-action">
                <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
              </div>
              <div className="card-reveal black teal-text text-lighten-2">
                <span className="card-title teal-text text-darken-2">Package Name<i className="material-icons right">close</i></span>
                <p>Here is some more information about this package.</p>
                <ul>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card black white-text sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={pack4} alt="Package Name"/>
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text text-darken-2">Package Name<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-action">
                <Link to="#" className="teal-text"><i className="material-icons tiny">add_shopping_cart</i>Add to Cart</Link>
              </div>
              <div className="card-reveal black teal-text text-lighten-2">
                <span className="card-title teal-text text-darken-2">Package Name<i className="material-icons right">close</i></span>
                <p>Here is some more information about this package.</p>
                <ul>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                  <li>[detail]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;