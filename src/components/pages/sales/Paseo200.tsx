import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import image1 from '../../../images/sales/paseo_200/1.jpeg'
import image2 from '../../../images/sales/paseo_200/2.jpeg'
import image3 from '../../../images/sales/paseo_200/3.jpeg'
import image4 from '../../../images/sales/paseo_200/4.jpeg'
import image5 from '../../../images/sales/paseo_200/5.jpeg'
import image6 from '../../../images/sales/paseo_200/6.jpeg'
import image7 from '../../../images/sales/paseo_200/7.jpeg'
import image8 from '../../../images/sales/paseo_200/8.jpeg'
import image9 from '../../../images/sales/paseo_200/9.jpeg'
import image10 from '../../../images/sales/paseo_200/10.jpeg'

function Paseo200 () {
    return ( 
    <>
      <Header />
       <div id="sales" className="container">
            <div className="row top-section">
                <div id="heading" className="col-md-12">
                    <h1>Paseo del Carmen</h1>
                    <h5>SERRALLES</h5>
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
                    <li data-target="#myCarousel" data-slide-to="9"></li>
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
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image7}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image8}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image9}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundPosition: "25% 50%", backgroundImage:  "url(" + image10}}></div>
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
                <div className="col-md-6" style={{width: "70%"}}>
                    <h1 className="price">Precio: $460,000 negociable</h1>
                    <div className="icons">
                        <p><i className="fa-solid fa-bed"></i> <span>3 Habitaciones</span></p>
                        <p><i className="fa-solid fa-bath"></i> <span>4.5 Baños</span></p>
                        <p><i className="fa-solid fa-car"></i> <span>4 Parqueos</span></p>
                        <p><i className="fa-solid fa-ruler"></i> <span>200 Mt2</span></p>
                    </div>

                    <h2>Reflejos:</h2>
                    <ul>
                        <li>Cuarto de servicio</li>
                        <li>Sala</li>
                        <li>Comedor</li>
                        <li>Cocina</li>
                        <li>Estudio</li>
                        <li>Balcón amplio</li>
                        <li>Aires Acond. Inverter</li>
                        <li>extractor de grasa</li>
                        <li>shuters</li>
                        <li>perma eléctrica</li>
                        <li>luces domotica</li>
 
                        <li><strong>Áreas sociales</strong></li>

                        <li>Terrazas</li>
                        <li>Parque</li>
                        <li>Gimnasio</li>
                        <li>2 salones de eventos</li>
                        <li>Area de niños</li>
                        <li>Planta full</li>
                        <li>Cuarto de choferes</li>
                        <li>Lobby climatizado</li>
                    </ul>
                </div>
                <div className="col-md-6 contact" style={{width: "30%", textAlign: "center"}}>
                    <h1>Contactanos</h1>
                    <div id="ron-image"></div>
                    <h3>Ronny Sepulveda</h3>
                    <p>Agente & administrador de propiedades</p>
                    <div className="whatsapp">(849) 507-8318</div>
                    <div className="phone"><Link to="tel:849-507-8318">LLAMENOS</Link></div>
                    <div className="email">ENVIAR CORREO</div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Paseo200;