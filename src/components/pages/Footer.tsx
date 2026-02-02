import { Link } from "react-router-dom";
import logo from '../../images/branding/logo_main.png';
                    

function Footer () {
    return (
        <div id="footer" className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} width="150px" />
                </div>
                
                <div className="col-md-3">
                    <h2>Compañía</h2>
                        <p>
                            <Link  className="nav-link" to="/sales">
                                Ventas
                            </Link>
                        </p>
                        <p>
                            <Link  className="nav-link" to="/rentals">
                                Alquiler
                            </Link>
                        </p>
                        <p>
                            <Link  className="nav-link" to="/contact">
                                Contacto
                            </Link>
                        </p>
                </div>
                
                <div className="col-md-3">
                    <h2>Atención Al Cliente</h2>
                    <p>Avenida Malecon 3, Santo Domingo Este Santo Domingo</p>
                    <p>Ronny Sepulveda: (849) 507-8318</p>
                </div>

                <div className="col-md-3">
                    <h2>Siguenos</h2>
                    <p className="multimedia">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-square-instagram"></i>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;