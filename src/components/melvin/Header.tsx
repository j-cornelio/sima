import { useEffect } from 'react';
import { sticky } from './stickyheader.js';
import logo from './images/logo_horizontal.png';

function Header() {
    useEffect(() => {
        sticky()
    }, [])

    return (
        <header className="main_h">

            <div className="row">
                <img className="logo" src={logo} />

                <div className="mobile-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav>
                    <ul>
                        <li><a href=".sec01">Section 01</a></li>
                        <li><a href=".sec02">Section 02</a></li>
                        <li><a href=".sec03">Section 03</a></li>
                        <li><a href=".sec04">Section 04</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
} 

export default Header;