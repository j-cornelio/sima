import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ContactPerson from "../../includes/ContactPerson";
import image0 from '../../../images/sales/independencia/1-H.png'
import image1 from '../../../images/sales/independencia/2-H.png'
import image2 from '../../../images/sales/independencia/3-H.png'
import image3 from '../../../images/sales/independencia/4-H.png'
import image4 from '../../../images/sales/independencia/5-H.png'
import image5 from '../../../images/sales/independencia/6-H.png'
import image8 from '../../../images/sales/independencia/8-horizontal.png'
import { useEffect } from 'react';

function Riviera165 () {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return ( 
    <>
      <Header />
       <div id="sales" className="container">
            <div className="row top-section">
                <div id="heading" className="col-md-12">
                    <h1>Calle Independencia</h1>
                    <h5>Guazcue, Santo Domingo</h5>
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
                    <h1 className="price">Precio: $2.6 Millones</h1>
                    <div className="icons">
                        <p><i className="fa-solid fa-building"></i> <span>2 Niveles</span></p>
                        <p><i className="fa-solid fa-print"></i> <span>27 Cubículos Para Oficinas</span></p>
                        <p><i className="fa-solid fa-bath"></i> <span>4 Baños </span></p>
                    </div>

                    <h2>Descripción</h2>

                    <ul>
                        <li className="areas-header">Primer Nivel:</li>
                        <li>1 Recepción</li>
                        <li>1 Area de cajas</li>
                        <li>1 Lobby</li>
                        <li>1 Salón de negocios</li>
                        <li>11 Cubículos para oficinas con espacio para más</li>
                        <li>1 Area de cómputos y servidores</li>
                        <li>1 Cocina</li>
                        <li>4 Baños hombre/mujer</li>
                        <li className="areas-header">Segundo Nivel:</li>
                        <li>1 Salón de conferencias</li>
                        <li>1 Área para call cennter</li>
                        <li>16 Oficinas administrativass</li>
                        <li className="areas-header">Area de Parqueos:</li>
                        <li>1 Local independiente para empleados</li>
                        <li>25 Parqueos para visitantes</li>
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