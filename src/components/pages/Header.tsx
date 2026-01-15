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
        <div id="header" className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="100px" />
                </Link>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link  className="nav-link" to="/sales">
                                Sales
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to="/rentals">
                                Rentals
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to="/contact">
                                Contact uS
                            </Link>
                        </li>
                    </ul>
                </div>
                    <div className="gtranslate_wrapper"></div>
            </nav>
        </div>
    )
}


export default Header;