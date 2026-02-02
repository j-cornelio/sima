import { useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/branding/logo_main.png';


function Header () {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.gtranslate.net/widgets/latest/flags.js'; // Replace with your script's URL or path from public folder
        script.async = true;
        document.body.appendChild(script);
         return () => {
            document.body.removeChild(script);
        };
    }, [])

    return (
          <nav id="header" className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="100px" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"> 
                            <Link  className="nav-link" to="/sales">
                                Ventas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to="/rentals">
                                Alquileres
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to="/contact">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="gtranslate_wrapper"></div>  
        </nav>
    )
}

export default Header;