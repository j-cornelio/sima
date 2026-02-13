
import Header from "../Header";
import Footer from "../Footer";
import livingroom from '../../../images/sales/paseo_220/21.jpg'
import image2 from '../../../images/sales/paseo_220/22.jpg'
import image3 from '../../../images/sales/paseo_220/23.jpg'
import image4 from '../../../images/sales/paseo_220/24.jpg'
import balcony from '../../../images/sales/paseo_220/26.jpg'

function Paseo220 () {
    return ( 
    <>
      <Header />
       <div id="sales" className="container">
            <div className="row top-section">
                <div id="heading" className="col-md-12">
                    <h1>Riviera Colonial</h1>
                    <h5>SERRELLAS</h5>
                </div>
                {/* CAROUSEL */}
                 <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="5"></li>
                    </ol>

                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                        <div className="item">
                            <div className="sales-img" style={{backgroundImage:  "url(" + livingroom}}></div>
                        </div>
                        <div className="item active">
                            <div className="sales-img" style={{backgroundImage:  "url(" + image4}}></div>
                        </div>
                        <div className="item">
                            <div className="sales-img" style={{backgroundImage:  "url(" + image2}}></div>
                        </div>
                        <div className="item">
                            <div className="sales-img" style={{backgroundImage:  "url(" + image3}}></div>
                        </div>
                        <div className="item">
                            <div className="sales-img" style={{backgroundImage:  "url(" + balcony}}></div>
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
                    <h1 className="price">Precio: $377,000 Negociable</h1>
                    <div className="icons">
                        <p><i className="fa-solid fa-bed"></i> <span>3 Habitaciones</span></p>
                        <p><i className="fa-solid fa-bath"></i> <span>3.5 Baños</span></p>
                        <p><i className="fa-solid fa-car"></i> <span>3 Estacionamientos</span></p>
                        <p><i className="fa-solid fa-ruler"></i> <span>220 Mt2</span></p>
                    </div>
                    <h2>Descripcion</h2>
                    <p>Este exclusivo proyecto de apartamentos, ubicado en el prestigioso polígono central de Santo Domingo, redefine el lujo y la comodidad con un diseño arquitectónico de vanguardia. Ideal para inversionistas y residentes exigentes, combina elegancia, funcionalidad y servicios de primera clase en un entorno privilegiado, a pasos de centros comerciales, bancos corporativos y la mejor oferta gastronómica y nocturna de la ciudad.</p>
                    <h2>Reflejos:</h2>
                    Cuarto de servicio

                    <ul>
                        <li>Cuarto de servicio</li>
                        <li>Sala</li>
                        <li>Comedor</li>
                        <li>Cocina</li>
                        <li>Balcón doble</li>
                    </ul>

                    <ul>
                        <li>Áreas sociales</li>
                        <li>Parques</li>
                        <li>Gimnasio</li>
                        <li>2 salones de eventos</li>
                        <li>Área de niños</li>
                        <li>Cuarto de choferes</li>
                        <li>Lobby climatizado</li>
                        <li>Planta full</li>
                    </ul>
                    <ul>
                        <li><strong>Incluye:</strong></li>
                        <li>Aires Acond Inverter</li>
                        <li>Extractor de grasa</li>
                        <li>Estufa</li>
                        <li>Nevera de últ Gener</li>
                        <li>Lavadora secadora</li>
                        <li>Mayas</li>
                        <li>Abanicos de techo</li>
                    </ul>
                </div>
                <div className="col-md-6 contact">
                    <h1>Contactanos</h1>
                    <div id="ron-image"></div>
                    <h3>Ronny Sepulveda</h3>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Paseo220;