import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ContactPerson from "../../includes/ContactPerson";
import image1 from '../../../images/sales/riviera_B4/21.png'
import image2 from '../../../images/sales/riviera_B4/22.png'
import image3 from '../../../images/sales/riviera_B4/23.png'
import image4 from '../../../images/sales/riviera_B4/24.png'
import image5 from '../../../images/sales/riviera_B4/25.png'
import { useEffect } from 'react';

function SalesRiviera4B () {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return ( 
    <>
      <Header />
       <div id="sales" className="container">
            <div className="row top-section">
                <div id="heading" className="col-md-12">
                    <h1>Riviera Colonial</h1>
                    <h5>SANTO DOMINGO ESTE</h5>
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
                        <div className="sales-img" style={{backgroundPosition: "25% 60%", backgroundImage:  "url(" + image1}}></div>
                    </div>
                    <div className="item active">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image2}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image3}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image4}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image5}}></div>
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
                    <h1 className="price">Precio: $235,000 negociable</h1>
                    <div className="icons">
                        <p><i className="fa-solid fa-bed"></i> <span>3 Habitaciones</span></p>
                        <p><i className="fa-solid fa-bath"></i> <span>2.5 Baños</span></p>
                        <p><i className="fa-solid fa-car"></i> <span>2 Estacionamientos</span></p>
                        <p><i className="fa-solid fa-ruler"></i> <span>135 Mt2</span></p>
                    </div>
                    <h2>Descripcion</h2>
                    <p>Apartamento de 3 recámaras y 2 baños con piscina y excelente vista a la Zona Colonial. Apartamento de 3 recámaras y 2 baños en Villa Duarte, frente a Río Ozama. ¡Ideal para inversionistas o para quienes buscan aumentar su patrimonio! ¡Precio por debajo del valor de mercado! Amplia y acogedora sala de estar. En excelentes condiciones, ¡a estrenar! ¡Precio inmejorable! ¡Cerca de la Zona Colonial! ¡Dos terrazas disponibles para barbacoas! ¡Esta hermosa casa espera a su nuevo dueño! ¡No se la pierda!</p>
                    <h2>Reflejos:</h2>
                    <ul>
                        <li>Área de lavado</li>
                        <li>Baño de servicio</li>
                        <li>Comedor</li>
                        <li>Cocina</li>
                        <li>Balcón</li>
                        <li className="areas-header">Áreas Sociales:</li>
                        <li>3 piscinas</li>
                        <li>3 terrazas</li>
                        <li>Sendero de caminar</li>
                        <li>Gimnasio</li>
                        <li>Sauna</li>
                        <li>Area de niños</li>
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

export default SalesRiviera4B;