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
                    <h2>COMPANY</h2>
                        <p>
                            <Link  className="nav-link" to="/sales">
                                Sales
                            </Link>
                        </p>
                        <p>
                            <Link  className="nav-link" to="/rentals">
                                Rentals
                            </Link>
                        </p>
                        <p>
                            <Link  className="nav-link" to="/contact">
                                Contacto
                            </Link>
                        </p>
                </div>
                
                <div className="col-md-3">
                    <h2>CUSTOMER CARE</h2>
                    <p>Avenida Malecon 3, Santo Domingo Este Santo Domingo</p>
                    <p>(849) 507-8318</p>
                </div>

                <div className="col-md-3">
                    <h2>FOLLOW US</h2>
                    <p><i>FB</i><i>Inst</i></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;