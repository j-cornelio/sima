import Header from "./Header";
import Footer from "./Footer";

import plaza from '../../images/rentals/plaza/1.png'
import riviera_b4 from '../../images/sales/riviera_B4/1.png'
import riviera118 from '../../images/sales/riviera_118/6.png'
import paseo_165 from '../../images/sales/paseo_165/24.jpeg'
import { Link } from "react-router-dom";

function Rentals () {
    return (
    <>
      <Header />
      <div id="rentals">
        <div id="sales" className="container">
          <h1>Propiedades Residenciales En Alquiler</h1>
            <div className="row">
              
              <div className="info col-md-4 sales-piece">
                <Link  className="nav-link" to="./plaza">
                      <img src={plaza} width="250px" />
                </Link>
                <div className="main-info">
                  <p>$750 mensual</p>
                  <p>Arrollo Ondo</p>
                </div>
                <div className="sub-info">
                  <p>2 Cuartos</p>
                  <p>2 Baños</p>
                  <p>50 Mt2 o 30 Mt2</p>
                <Link  className="nav-link" to="./plaza">
                  <button>Ver Detalles</button>
                </Link>
                </div>
              </div>
              
              <div className="info col-md-4 sales-piece">
                <Link  className="nav-link" to="./Riviera4B">
                      <img src={riviera_b4} width="250px" />
                </Link>
                <div className="main-info">
                  <p>$1,700 mensual</p>
                  <p>Riviera Colonial</p>
                </div>
                <div className="sub-info">
                  <p>3 Dormitorios</p>
                  <p>2.5 Baños</p>
                  <p>135 Mt2</p>
                <Link  className="nav-link" to="./Riviera4B">
                  <button>Ver Detalles</button>
                </Link>
                </div>
              </div>
              
              <div className="info col-md-4 sales-piece">
                <Link  className="nav-link" to="./Riviera118">
                  <img src={riviera118} width="250px" />
                </Link>
                <div className="main-info">
                  <p>$185,000 pesos amueblado</p>
                  <p>Riviera Colonial</p>
                </div>
                <div className="sub-info">
                  <p>3 Dormitorios</p>
                  <p>2.5 Baños</p>
                  <p>118 Mt2</p>
                <Link  className="nav-link" to="Riviera118">
                  <button>Ver Detalles</button>
                </Link>
                </div>
              </div>
              
              <div className="info col-md-4 sales-piece">
                <Link  className="nav-link" to="Paseo165">
                  <img src={paseo_165} height="332px" width="250px" />
                </Link>
                <div className="main-info">
                  <p>$1,700 mensual</p>
                  <p>Torre Paseo del Carmen</p>
                </div>
                <div className="sub-info">
                  <p>3 Dormitorios</p>
                  <p>3.5 Baños</p>
                  <p>165 Mt2</p>
                  <Link  className="nav-link" to="Paseo165">
                    <button>Ver Detalles</button>
                  </Link>
                </div>
              </div>
            </div>
      </div>
      </div>
      <Footer />
    </>
)
}

export default Rentals;