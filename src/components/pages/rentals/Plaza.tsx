import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ContactPerson from "../../includes/ContactPerson";

import image0 from '../../../images/rentals/plaza/13.png'
import image1 from '../../../images/rentals/plaza/14.png'
import image2 from '../../../images/rentals/plaza/15.png'
import image3 from '../../../images/rentals/plaza/16.png'
import image4 from '../../../images/rentals/plaza/12.png'

function Riviera165 () {
    return ( 
    <>
      <Header />
       <div id="sales" className="container">
            <div className="row top-section">
                <div id="heading" className="col-md-12">
                    <h1>Plaza en Arollo Ondo - 50 Mt2 y 30 Mt2 </h1>
                    <h5>C. Gral. F. Rodríguez 1, Santo Domingo 10510</h5>
                </div>
            {/* CAROUSEL */}
                 <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                </ol>

                {/* Wrapper for slides */}
                <div className="carousel-inner">
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image0}}></div>
                    </div>
                    <div className="item active">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image1}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image2}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image3}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image4}}></div>
                    </div>
                </div>

                {/* Left and right controls */}
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
                
            {/* bottom 2 Cols */}
            </div>
            <div className="row">
                <div className="col-md-6 content">
                    <h1 className="price">Precio: 50 Mt2 - $750 | 50 Mt2 - $450</h1>
                    <div className="icons">
                        <p><i className="fa-solid fa-bed"></i> <span>2 Hab</span></p>
                        <p><i className="fa-solid fa-bath"></i> <span>2 Baños</span></p>
                        <p><i className="fa-solid fa-car"></i> <span>1 Estacionamientos</span></p>
                        <p><i className="fa-solid fa-ruler"></i> <span>50 Mt2</span></p>
                    </div>

                    <h2>Reflejos:</h2>
                    <ul>
                        <li>2 habitaciones</li>
                    </ul>
                </div>
                <div className="col-md-6 contact">
                    <ContactPerson />
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Riviera165;