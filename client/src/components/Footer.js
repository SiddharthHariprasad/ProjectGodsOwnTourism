import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Row, Col } from 'react-materialize';

const Footer = () =>{
    return(
        <footer className="page-footer black teal-text text-accent-4">
            {/* container div for centering and targeting  */}
            <div className="container">
                {/* new row */}
                <Row>
                    {/* new column */}
                    <Col s={12} l={4} className="center">
                        {/*terms and conditions */}
                        <Modal id="termsandconditions" header="Terms &amp; Conditions" trigger={<Button className="btn teal accent-4 black-text center-align modal-trigger">TERMS &amp; CONDITIONS</Button>}>
                            <div className="modal-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, exercitationem perferendis. Reiciendis earum porro, laborum deserunt autem nisi! Quia culpa ipsa suscipit cupiditate vitae a obcaecati nobis odit quam commodi.
                                </p>
                            </div>
                        </Modal>
                        <br /><br />
                        {/* privacy policy */}
                        <Modal id="privacypolicy" header="Privacy Policy" trigger={<Button className="btn teal accent-4 black-text center-align modal-trigger">PRIVACY POLICY</Button>}>
                            <div className="modal-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi nisi incidunt esse ea dolorum ab itaque non. Nobis maiores suscipit nihil eligendi necessitatibus cumque accusantium, eum esse eveniet iusto?
                                </p>
                            </div>
                        </Modal>
                    </Col>
                    {/* contact us section */}
                    <Col s={12} l={4} className="contact-us center">
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
                    </Col>
                    {/* social media section */}
                    <Col s={12} l={4} className="socials center">
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
                    </Col>
                </Row>
            </div>
            {/* copyright */}
            <div className="footer-copyright black">
                <div className="container center-align">&copy; 2021 God's Own Toursim</div>
            </div>
        </footer>
    );
}

export default Footer;