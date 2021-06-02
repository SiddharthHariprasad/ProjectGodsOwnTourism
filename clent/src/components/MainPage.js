import { Link } from "react-router-dom";
import tea from './images/tea.jpg';
import tractor from './images/tractor.jpg';

function MainPage() {
    return(
        <div id="main-content">
            {/* Photo Carousel */}
            <div className="carousel-holder black" id="image-carousel">
            {/* carousel div where the links and images */}
                <div className="carousel carousel-slider center">
                    {/* links that become images */}
                    <Link to="/packages" className="carousel-item black carousel-image-1"> </Link>
                    <Link to="/guides" className="carousel-item black carousel-image-2"> </Link>
                </div>
            </div>
            {/* Serivces (section to hold all services (divs) for styling and targeting together and also for centering) */}
            <section className="container section" id="services">
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <div className="row" id="packages">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <Link to="/packages">
                        {/* First column */}
                        <div className="col s12 l4">
                            <h2>Packages</h2>
                        </div>
                        {/* Second column */}
                        <div className="col s12 l6 offset-l2">
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo a atque minus sed sit assumenda! Beatae, sint quibusdam perferendis laborum aliquam dolorem voluptatum inventore ab, aut facilis hic exercitationem.
                            </p>
                        </div>
                    </Link>
                </div>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <div className="row" id="tickets">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <Link to="/tickets">
                        {/* First column */}
                        <div className="col s12 l4 push-l6">
                            <h2>Tickets</h2>
                        </div>
                        {/* Second column */}
                        <div className="col s12 l4 pull-l5 right-align offset-l2">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptate voluptates magnam nisi voluptatum impedit molestias ducimus recusandae aliquid quia nesciunt labore dolorem, odit quo eos. Itaque numquam quidem voluptates?
                            </p>
                        </div>
                    </Link>
                </div>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <div className="row" id="hotels">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <Link to="/hotels">
                        {/* First column */}
                        <div className="col s12 l4">
                            <h2>Hotels</h2>
                        </div>
                        {/* Second column */}
                        <div className="col s12 l6 offset-l2">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus dignissimos harum quam modi, est quibusdam eaque pariatur laborum suscipit unde corrupti similique maxime aliquam, veniam accusantium nulla alias assumenda?
                            </p>
                        </div>
                    </Link>
                </div>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <div className="row" id="cabs">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <Link to="/cabs">
                        {/* First column */}
                        <div className="col s12 l4 push-l6">
                            <h2>Cabs</h2>
                        </div>
                        {/* Second column */}
                        <div className="col s12 l4 pull-l5 right-align offset-l2">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero sit labore cumque ratione veritatis! Suscipit, exercitationem nihil pariatur aperiam voluptatum alias dignissimos aut fugit minus maxime libero quos delectus?
                            </p>
                        </div>
                    </Link>
                </div>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <div className="row" id="guides">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <Link to="/guides">
                        {/* First column */}
                        <div className="col s12 l4">
                            <h2>Guides</h2>
                        </div>
                        {/* Second column */}
                        <div className="col s12 l6 offset-l2">
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum ipsam quidem minus commodi inventore omnis, nemo quae cum, consequatur libero ea nostrum odio mollitia enim nulla atque fugit dignissimos.
                            </p>
                        </div>
                    </Link>
                </div>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <div className="row" id="about">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <Link to="/AboutUs">
                        {/* First column */}
                        <div className="col s12 l4 push-l6">
                            <h2>About Us</h2>
                        </div>
                        {/* Second column */}
                        <div className="col s12 l4 pull-l5 right-align offset-l2">
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et qui voluptatibus aliquid, quae ipsam est labore enim dolore harum id ipsa amet magnam, obcaecati laudantium voluptatum veniam accusamus soluta quasi.
                            </p>
                        </div>
                    </Link>
                </div>
            </section>
            {/* Parallax */}
            <div className="parallax-container">
                <div className="parallax">
                    <img src={tractor} alt="tractor" className="responsive-img" />
                </div>
            </div>
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
                <div className="row center-align">
                    {/* first column */}
                    <div className="col s12 l6">
                        {/* card div to give it card like styling */}
                        <div className="card-panel teal center-align">
                            {/* content of the card */}
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore reprehenderit aut esse iure laborum fugit quisquam sequi cumque aliquid. Provident unde explicabo eaque nihil atque earum id, minima quibusdam.
                            </p>
                        </div>
                    </div>
                    {/* second column */}
                    <div className="col s12 l6">
                        {/* card div to give it card like styling */}
                        <div className="card-panel teal center-align">
                            {/* content of the card */}
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt dignissimos dolores fuga. Quidem, id, temporibus esse quos officiis ipsam explicabo sit tempora labore sapiente provident sint quis iste est.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Parallax */}
            <div className="parallax-container">
                <div className="parallax">
                    <img src={tea} alt="tea estate" className="responsive-img" />
                </div>
            </div>
        </div>
    );
}

export default MainPage;