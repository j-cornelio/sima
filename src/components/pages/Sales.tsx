import Header from "./Header";
import Footer from "./Footer";
import paseo_200 from '../../images/sales/paseo_200/1.jpeg'
import livingroom from '../../images/sales/riviera_B4/livingroom.jpeg'
import kitchen from '../../images/sales/riviera_118/kitchen.jpg'
import riviera_115 from '../../images/sales/riviera_115/9.png'
import riviera_84 from '../../images/sales/riviera_84/1.jpeg'
import balcony from '../../images/sales/paseo_220/balcony.jpg'
import paseo_190 from '../../images/sales/paseo_190/1.jpg'
import paseo_165 from '../../images/sales/paseo_165/24.jpeg'
import paseo_135 from '../../images/sales/riviera_135/livingroom.jpeg'
import { Link } from "react-router-dom";

function Sales () {
    return (
    <>
      <Header />
        <div id="sales" className="container">
          
            <h1>Propiedades Residenciales En Venta</h1>

{/* ROW 1 */}

          <div className="row">
            <div className="info col-md-4 sales-piece">
              <Link  className="nav-link" to="paseo200">
                <img src={paseo_200} width="250px" />
              </Link>
              <div className="main-info">
                <p>$460,000 negociable</p>
                <p>Paseo del Carmen Tower</p>
              </div>
              <div className="sub-info">
                <p>3 Dormitorios</p>
                <p>4.5 Baños</p>
                <p>200 Mt2</p>
                <Link  className="nav-link" to="paseo200">
                  <button>Ver Detalles</button>
                </Link>
              </div>
            </div>

            <div className="info col-md-4 sales-piece">
              <Link  className="nav-link" to="riviera-4b">
                <img src={livingroom} width="250px" />
              </Link>
              <div className="main-info">
                <p>$235,000 negociable</p>
                <p>Riviera Colonial</p>
              </div>
              <div className="sub-info">
                <p>3 Dormitorios</p>
                <p>2.5 Baños</p>
                <p>135 Mt2</p>
                <Link  className="nav-link" to="riviera-4b">
                  <button>Ver Detalles</button>
                </Link>
              </div>
            </div>
            
            <div className="info col-md-4 sales-piece">
              <Link  className="nav-link" to="Riviera118">
                <img src={kitchen} width="250px" />
              </Link>
              <div className="main-info">
                <p>$185,000 amueblado</p>
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
          </div>

{/* ROW 2 */}

          <div className="row">
            <div className="info col-md-4 sales-piece">
              <Link  className="nav-link" to="Paseo220">
                <img src={balcony} width="250px" />
              </Link>
              <div className="main-info">
                <p>$377,000 negociable</p>
                <p>Torre Paseo del Carmen</p>
              </div>
              <div className="sub-info">
                <p>3 Dormitorios</p>
                <p>3.5 Baños</p>
                <p>220 Mt2</p>
                <Link  className="nav-link" to="Paseo220">
                  <button>Ver Detalles</button>
                </Link>
              </div>
            </div>
            <div className="info col-md-4 sales-piece">
              <Link  className="nav-link" to="Paseo190">
                <img src={paseo_190} width="250px" />
              </Link>
              <div className="main-info">
                <p>$390,800 negociable</p>
                <p>Torre Paseo del Carmen</p>
              </div>
              <div className="sub-info">
                <p>3 Dormitorios</p>
                <p>3.5 Baños</p>
                <p>190 Mt2</p>
              <Link  className="nav-link" to="Paseo190">
                <button>Ver Detalles</button>
              </Link>
              </div>
            </div>
            
            <div className="info col-md-4 sales-piece">
              <Link  className="nav-link" to="Paseo165">
                <img src={paseo_165} height="332px" width="250px" />
              </Link>
              <div className="main-info">
                <p>$335,000 negociable</p>
                <p>Riviera Colonial</p>
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

{/* ROW 3 */}

          <div className="row">
            <div className="info col-md-4 sales-piece">
              <Link  className="nav-link" to="Riviera135">
                <img src={paseo_135} width="250px" />
              </Link>
              <div className="main-info">
                <p>$235,000 amueblado</p>
                <p>Riviera Colonial</p>
              </div>
              <div className="sub-info">
                <p>3 Dormitorios</p>
                <p>2.5 Baños</p>
                <p>135 Mt2</p>
                <Link  className="nav-link" to="Riviera135">
                  <button>Ver Detalles</button>
                </Link>
              </div>
            </div>
            
            <div className="info col-md-4 sales-piece">
              <Link  className="nav-link" to="Riviera115">
                <img src={riviera_115} height="332px" width="250px" />
              </Link>
              <div className="main-info">
                <p>$200,000 Neg. Amueblado</p>
                <p>Riviera Colonial</p>
              </div>
              <div className="sub-info">
                <p>3 Dormitorios</p>
                <p>3 Baños</p>
                <p>115 Mt2</p>
                <Link  className="nav-link" to="Riviera115">
                  <button>Ver Detalles</button>
                </Link>
              </div>
            </div>
            
            <div className="info col-md-4 sales-piece">
              <Link  className="nav-link" to="Riviera84">
                <img src={riviera_84} height="332px" width="250px" />
              </Link>
              <div className="main-info">
                <p>$160,000 negociable</p>
                <p>Riviera Colonial</p>
              </div>
              <div className="sub-info">
                <p>3 Dormitorios</p>
                <p>3 Baños</p>
                <p>84 Mt2</p>
              <Link  className="nav-link" to="Riviera84">
                <button>Ver Detalles</button>
              </Link>
              </div>
            </div>
          </div>

        </div>
      <Footer />
    </>
    )
}

export default Sales;