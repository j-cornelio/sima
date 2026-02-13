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
      <nav>
        <div className="wrapper">
          <div className="logo">
             <Link className="navbar-brand" to="/">
                <img src={logo} width="120px" />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li>
              <Link className="nav-link" to="/sales">
                Ventas
            </Link>
            </li>
            <li>
               <Link className="nav-link" to="/rentals">
                  Alquileres
              </Link>
            </li>
            <li>
               <Link className="nav-link" to="/contact">
                  Contacto
              </Link>
            </li>
            
            <li><div className="gtranslate_wrapper"></div></li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      </nav>
    )
}

export default Header;