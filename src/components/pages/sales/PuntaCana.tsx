
import Header from "../Header";
import Footer from "../Footer";
import image1 from '../../../images/sales/Villa_Punta_Cana/3.jpeg'
import image2 from '../../../images/sales/Villa_Punta_Cana/2.jpeg'
import image3 from '../../../images/sales/Villa_Punta_Cana/4.jpeg'
import image4 from '../../../images/sales/Villa_Punta_Cana/9.jpeg'
import image5 from '../../../images/sales/Villa_Punta_Cana/14.jpeg'

function SalesRiviera4B () {
    return ( 
    <>
      <Header />
       <div id="sales" className="container">
            <div className="row top-section">
                <div id="heading" className="col-md-12">
                    <h1>Condotel</h1>
                    <h5>Villas de Barbaro</h5>
                </div>

            {/* CAROUSEL */}
                 <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                {/* Wrapper for slides */}
                <div className="carousel-inner">
                    <div className="item">
                        <div className="sales-img" style={{backgroundImage:  "url(" + image1}}></div>
                    </div>
                    <div className="item active">
                        <div className="sales-img" style={{backgroundImage:  "url(" + image3}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundImage:  "url(" + image2}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundImage:  "url(" + image4}}></div>
                    </div>
                    <div className="item">
                        <div className="sales-img" style={{backgroundImage:  "url(" + image5}}></div>
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
                    <h1 className="price">Precio: $5,500,000</h1>
                    <div className="icons">
                        <p><i className="fa-solid fa-bed"></i> <span>32 Habitaciones</span></p>
                        <p><i className="fa-solid fa-bath"></i> <span>32 Baños</span></p>
                    </div>
                    <h2>Descripcion</h2>
                    <p>Un projedto sumamente bello y lucrativo. Tiene varios carritos de golf para trasladar a los huéspedes a la playa, esta ubicado a 3 minutos del cortecito en villas bárbaro</p>
                    <h2>Reflejos:</h2>
                    
                    <ul>
                        <li>32 Apartamentos en total</li>
                        <li>22 Aptos de 2hbt. De 88M²</li>
                        <li>10 Aptos. De 1hbt. De 70M²</li>
                        <li>Comedor</li>
                        <li>Lavandería</li>
                        <li>2 bares</li>
                        <li>1 restaurante</li>
                    </ul>
                </div>
                <div className="col-md-6" style={{width: "30%", textAlign: "center"}}>
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

export default SalesRiviera4B;