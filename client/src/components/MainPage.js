import tea from './images/tea.jpg';
import tractor from './images/tractor.jpg';
import { CardPanel, Carousel, Col, Parallax, Row } from 'react-materialize';

function MainPage() {
    return(
        <div id="main-content">
            <div className="carousel-holder black" id="image-carousel">
                {/* Photo Carousel */}
                <Carousel carouselId="Carousel-1" options={{ fullWidth: true, indicators: true }}>
                    {/* carousel div where the links and images */}
                    <div className="black carousel-image-1">
                        <a href="/packages" className="carousel-link" alt="go to packages">.</a>
                    </div>
                    <div className="black carousel-image-2">
                        <a href="/guides" className="carousel-link" alt="go to guides">.</a>
                    </div>
                </Carousel>
            </div>
            {/* Serivces (section to hold all services (divs) for styling and targeting together and also for centering) */}
            <section className="container section" id="services">
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="packages">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/packages">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Packages</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={6} offset="l2">
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo a atque minus sed sit assumenda! Beatae, sint quibusdam perferendis laborum aliquam dolorem voluptatum inventore ab, aut facilis hic exercitationem.
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="tickets">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/tickets">
                        {/* First column */}
                        <Col s={12} l={4} push="l6">
                            <h2>Tickets</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={4} className="right-align" pull="l5" offset="l2">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptate voluptates magnam nisi voluptatum impedit molestias ducimus recusandae aliquid quia nesciunt labore dolorem, odit quo eos. Itaque numquam quidem voluptates?
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="hotels">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/hotels">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Hotels</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={6} offset="l2">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus dignissimos harum quam modi, est quibusdam eaque pariatur laborum suscipit unde corrupti similique maxime aliquam, veniam accusantium nulla alias assumenda?
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="cabs">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/cabs">
                        {/* First column */}
                        <Col s={12} l={4} push="l6">
                            <h2>Cabs</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={4} className="right-align" pull="l5" offset="l2">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero sit labore cumque ratione veritatis! Suscipit, exercitationem nihil pariatur aperiam voluptatum alias dignissimos aut fugit minus maxime libero quos delectus?
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="guides">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/guides">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Guides</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={6} offset="l2">
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum ipsam quidem minus commodi inventore omnis, nemo quae cum, consequatur libero ea nostrum odio mollitia enim nulla atque fugit dignissimos.
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="about">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/AboutUs">
                        {/* First column */}
                        <Col s={12} l={4} push="l6">
                            <h2>About Us</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={4} className="right-align" pull="l5" offset="l2">
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et qui voluptatibus aliquid, quae ipsam est labore enim dolore harum id ipsa amet magnam, obcaecati laudantium voluptatum veniam accusamus soluta quasi.
                            </p>
                        </Col>
                    </a>
                </Row>
            </section>
            {/* Parallax */}'
            <Parallax image={<img src={tractor} alt="tractor" className="responsive-img" />} options={{responsiveThreshold: 0}} />
            {/* Feedback */}
            <section className="container section" id="feedback">
                {/* new row inside the section for feedback title */}
                <div className="row center-align">
                    {/* first column full size */}
                    <div className="col s12">
                        <h2>Feedback</h2>
                    </div>
                </div>
                {/* new row for feedbacks */}
                <Row className="center-align">
                    {/* first column */}
                    <Col s={12} l={6}>
                        {/* card div to give it card like styling */}
                        <CardPanel className="card-panel teal center-align">
                            {/* content of the card */}
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore reprehenderit aut esse iure laborum fugit quisquam sequi cumque aliquid. Provident unde explicabo eaque nihil atque earum id, minima quibusdam.
                            </p>
                        </CardPanel>
                    </Col>
                    {/* second column */}
                    <Col s={12} l={6}>
                        <CardPanel className="card-panel teal center-align">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt dignissimos dolores fuga. Quidem, id, temporibus esse quos officiis ipsam explicabo sit tempora labore sapiente provident sint quis iste est.
                            </p>
                        </CardPanel>
                    </Col>
                </Row>
            </section>
            {/* Parallax */}
            <Parallax image={<img src={tea} alt="tractor" className="responsive-img" />} options={{responsiveThreshold: 0}} />
        </div>
    );
}

export default MainPage;