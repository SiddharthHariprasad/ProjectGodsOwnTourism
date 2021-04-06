import './App.css';
import { NavLink, Link } from "react-router-dom";
import Main from '../Main';
function App() {
  return (
    <div className="App">
      {/* Navbar (header region of the visible body) */}
      <header>
        {/* Nav to hold the navbar */}
        <nav className="nav-wrapper black">
          {/* container div for centering and styling easily center */}
          <div className="container">
            {/* menu icon (3 lines) for sidenav-bar in small screens */}
            <Link to="#mobile-menu" className="sidenav-trigger teal-text" data-target="mobile-menu"><i className="material-icons">menu</i></Link>
            {/* Website name with link to homepage*/}
            <Link to="/" id="logoBig" className="brand-logos left teal-text hide-on-small-only">God's Own Tourism</Link>
            <Link to="/" id="logoSmall" className="brand-logo teal-text hide-on-med-and-up">God's Own Tourism</Link>
            {/* Links to different pages of the website (links in navbar for large screens) */}
            <ul className="right hide-on-med-and-down">
              <li><NavLink to="/Packages" className="teal-text waves-effect waves-light">Packages</NavLink></li>
              <li><NavLink to="/Tickets" className="teal-text waves-effect waves-light">Tickets</NavLink></li>
              <li><NavLink to="/Hotels" className="teal-text waves-effect waves-light">Hotels</NavLink></li>
              <li><NavLink to="/Cabs" className="teal-text waves-effect waves-light">Cabs</NavLink></li>
              <li><NavLink to="/Guides" className="teal-text waves-effect waves-light">Guides</NavLink></li>
              <li><NavLink to="/AboutUs" className="teal-text waves-effect waves-light">About Us</NavLink></li>
            </ul>
            {/* Links to different pages of the website (links in side-navbar for medium and smaller screens) */}
            <ul id="mobile-menu" className="sidenav teal accent-3">
              <li><NavLink to="/Packages" className="waves-effect waves-dark">Packages</NavLink></li>
              <li><NavLink to="/Tickets" className="waves-effect waves-dark">Tickets</NavLink></li>
              <li><NavLink to="/Hotels" className="waves-effect waves-dark">Hotels</NavLink></li>
              <li><NavLink to="/Cabs" className="waves-effect waves-dark">Cabs</NavLink></li>
              <li><NavLink to="/Guides" className="waves-effect waves-dark">Guides</NavLink></li>
              <li><NavLink to="/AboutUs" className="waves-effect waves-dark">About Us</NavLink></li>
            </ul>
         </div>
        </nav>
      </header>

      {/* main content div that can be modified to dynamically include content (dynamicity not yet set up) */}
      <Main />
      
      {/* Footer */}
      <footer className="page-footer black teal-text">
        {/* container div for centering and targeting  */}
        <div className="container">
          {/* new row */}
          <div className="row">
            {/* new coolumn */}
            <div className="col s12 l4 center">
              {/*terms and conditions */}
              <div id="termsandconditions">
                <br />
                {/* button for terms and conditions */}
                <Link to="#terms" className="btn teal accent-3 black-text center-align modal-trigger">TERMS &amp; CONDITIONS</Link>
                {/* the popup for terms and conditions */}
                <div className="modal" id="terms">
                  {/* content of popup */}
                  <div className="modal-content">
                    <h4>Terms &amp; Conditions</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, exercitationem perferendis. Reiciendis earum porro, laborum deserunt autem nisi! Quia culpa ipsa suscipit cupiditate vitae a obcaecati nobis odit quam commodi.
                    </p>
                  </div>
                  {/* footer of popup */}
                  <div className="modal-footer">
                    {/* agree and close button */}
                    <Link to="#!" className="modal-close btn teal accent-3 black-text">AGREE &amp; CLOSE</Link>
                  </div>
                </div>
              </div>
              {/* privacy policy */}
              <div id="privacypolicy">
                <br />
                {/* button for privacy policy */}
                <Link to="#privacy" className="btn teal accent-3 black-text center-align modal-trigger">PRIVACY POLICY</Link>
                {/* popup for privacy policy */}
                <div className="modal" id="privacy">
                  {/* content for popup */}
                  <div className="modal-content">
                    <h4>Privacy Policy</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi nisi incidunt esse ea dolorum ab itaque non. Nobis maiores suscipit nihil eligendi necessitatibus cumque accusantium, eum esse eveniet iusto?
                    </p>
                  </div>
                  {/* footer of popup */}
                  <div className="modal-footer">
                    {/* agree and close button */}
                    <Link to="#!" className="modal-close btn teal accent-3 black-text">AGREE &amp; CLOSE</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* contact us section */}
            <div className="col s12 l4 contact-us center">
              {/* heading for contact us section */}
              <h5>Contact Us</h5>
              {/* links to various contacting options */}
              <Link to="tel:+91819357648" className="btn-floating btn-small teal darken-3">
                <i className="material-icons">phone</i>
              </Link>
              <Link to="sms:+91819357648" className="btn-floating btn-small teal darken-3">
                <i className="material-icons">sms</i>
              </Link>
              <Link to="mailto:siddhuhariprasad@gmail.com" className="btn-floating btn-small teal darken-3">
                <i className="material-icons">mail</i>
              </Link>
            </div>
            {/* social media section */}
            <div className="col s12 l4 socials center">
              {/* heading for social media icons */}
              <h5>Connect with us on</h5>
              {/* links to various social medias */}
              <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn-floating btn-small teal darken-3">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer" className="btn-floating btn-small teal darken-3">
                <i className="fab fa-facebook" />
              </Link>
              <Link to="https://twitter.com/" target="_blank" rel="noreferrer" className="btn-floating btn-small teal darken-3">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="https://www.youtube.com/" target="_blank" rel="noreferrer" className="btn-floating btn-small teal darken-3">
                <i className="fab fa-youtube" />
              </Link>
              <Link to="https://wa.me/" target="_blank" rel="noreferrer" className="btn-floating btn-small teal darken-3">
                <i className="fab fa-whatsapp" />
              </Link>
              <Link to="https://t.me/" target="_blank" rel="noreferrer" className="btn-floating btn-small teal darken-3">
                <i className="fab fa-telegram" />
              </Link>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="footer-copyright black">
          <div className="container center-align">&copy; 2021 God's Own Toursim</div>
        </div>
      </footer>
    </div>
  );
}
export default App;