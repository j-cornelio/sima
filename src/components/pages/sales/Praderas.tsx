
import Header from "../Header";
import Footer from "../Footer";
import ContactPerson from "../../includes/ContactPerson";
import image1 from '../../../images/sales/praderas/1.jpeg'
import image2 from '../../../images/sales/praderas/2.jpeg'
import image3 from '../../../images/sales/praderas/3.jpeg'
import image4 from '../../../images/sales/praderas/4.jpeg'
import image5 from '../../../images/sales/praderas/5.jpeg'
import image6 from '../../../images/sales/praderas/6.jpeg'

function Praderas () {
    return ( 
    <>
      <Header />
       <div id="sales" className="container">
            <div className="row top-section">
                <div id="heading" className="col-md-12">
                    <h1>Casa en venta, las Praderas SDE</h1>
                    <h5>700 M² de construcción y 1,600 M² de terreno</h5>
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
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image1}}></div>
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
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image6}}></div>
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
                    <h1 className="price">Precio: $900,000 </h1>
                    <div className="icons">
                        <p><i className="fa-solid fa-bed"></i> <span>7 Habitaciones</span></p>
                        <p><i className="fa-solid fa-bath"></i> <span>7 Baños</span></p>
                        <p><i className="fa-solid fa-car"></i> <span>6 Estacionamientos</span></p>
                    </div>
                    <h2>Descripcion</h2>
                    <p>Exclusivo Grand proyecto, ubicado en el prestigioso polígono central de Santo Domingo, redefine el lujo y la comodidad con un diseño arquitectónico de vanguardia. Ideal para inversionistas y residentes exigentes, combina elegancia, funcionalidad y servicios de primera clase en un entorno privilegiado, a pasos de centros comerciales, bancos corporativos y la mejor oferta gastronómica y nocturna de la ciudad.</p>
                    <h2>Reflejos:</h2>

                   <ul>
                        <li>Sala</li>
                        <li>Family</li>
                        <li>Cuarto de servicio</li>
                        <li>Pozo sumergible</li>
                        <li>Planta full</li>
                        <li>Casa de huéspedes/piscina</li>
                        <li>Gacebo</li>
                        <li>Jardín</li>
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

export default Praderas;