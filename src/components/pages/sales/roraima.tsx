import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ContactPerson from "../../includes/ContactPerson";
import image1 from '../../../images/sales/roraima/1.png'
import image2 from '../../../images/sales/roraima/2.png'
import image3 from '../../../images/sales/roraima/3.png'
import image4 from '../../../images/sales/roraima/12.png'
import image5 from '../../../images/sales/roraima/5.png'
import image6 from '../../../images/sales/roraima/6.png'
import image7 from '../../../images/sales/roraima/7.png'
import image8 from '../../../images/sales/roraima/8.png'
import image9 from '../../../images/sales/roraima/9.png'
import video from '../../../images/sales/roraima/terrace.mp4'
import { useEffect } from 'react';

function Paseo200() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div id="sales" className="container">
                <div className="row top-section">
                    <div id="heading" className="col-md-12">
                        <h1>Hermoso Apartamento en torre Roraima</h1>
                        <h5>Sector de Evaristo Morales</h5>
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
                            <li data-target="#myCarousel" data-slide-to="5"></li>
                            <li data-target="#myCarousel" data-slide-to="6"></li>
                            <li data-target="#myCarousel" data-slide-to="7"></li>
                            <li data-target="#myCarousel" data-slide-to="8"></li>
                        </ol>

                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                            <div className="item">
                                <div className="sales-img" style={{ backgroundPosition: "25% 50%", backgroundImage: "url(" + image1 }}></div>
                            </div>
                            <div className="item active">
                                <div className="sales-img" style={{ backgroundPosition: "25% 50%", backgroundImage: "url(" + image2 }}></div>
                            </div>
                            <div className="item">
                                <div className="sales-img" style={{ backgroundPosition: "25% 50%", backgroundImage: "url(" + image3 }}></div>
                            </div>
                            <div className="item">
                                <div className="sales-img" style={{ backgroundPosition: "25% 80%", backgroundImage: "url(" + image4 }}></div>
                            </div>
                            <div className="item">
                                <div className="sales-img" style={{ backgroundPosition: "25% 50%", backgroundImage: "url(" + image5 }}></div>
                            </div>
                            <div className="item">
                                <div className="sales-img" style={{ backgroundPosition: "25% 50%", backgroundImage: "url(" + image6 }}></div>
                            </div>
                            <div className="item">
                                <div className="sales-img" style={{ backgroundPosition: "25% 50%", backgroundImage: "url(" + image7 }}></div>
                            </div>
                            <div className="item">
                                <div className="sales-img" style={{ backgroundPosition: "25% 50%", backgroundImage: "url(" + image8 }}></div>
                            </div>
                            <div className="item">
                                <div className="sales-img" style={{ backgroundPosition: "25% 50%", backgroundImage: "url(" + image9 }}></div>
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
                        <h1 className="price">Precio: $214,000 USD</h1>
                        <div className="icons">
                            <p><i className="fa-solid fa-bed"></i> <span>1 Habitacion</span></p>
                            <p><i className="fa-solid fa-bath"></i> <span>1.5 Baños</span></p>
                            <p><i className="fa-solid fa-car"></i> <span>1 Parqueo</span></p>
                            <p><i className="fa-solid fa-ruler"></i> <span>73 Mt2</span></p>
                        </div>

                        <h2>Reflejos:</h2>
                        <ul>
                            <li>Comedor</li>
                            <li>Cocina</li>
                            <li>Balcón</li>
                            <li>Baño de servicio</li>
                            <li>Totalmente amueblado</li>

                            <li className="areas-header">Áreas Sociales:</li>

                            <li>2 Terrazas</li>
                            <li>Gimnasio</li>
                            <li>2 piscinas</li>
                            <li>Area de niños</li>
                            <li>Salon de eventos</li>
                            <li>Sauna</li>

                            <video width="250px" height="333px" autoPlay muted loop>
                                <source src={video} type="video/mp4" />
                            </video>
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

export default Paseo200;