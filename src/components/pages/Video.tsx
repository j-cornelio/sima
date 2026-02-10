import React from "react";
import video from '../../images/sales/Villa_Punta_Cana/video1.mp4'
import { Link } from "react-router-dom";

function Video () {
    return ( 
        <div id="video">
            <video width="100%" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className="info">
                <h1>¿Listo para comenzar un nuevo capítulo?</h1>
                <div>
                    <Link className="nav-link" to="/sales">
                        <button>Compra Tu Casa</button>
                    </Link>
                    <Link className="nav-link" to="/contact">
                        <button>Vende Tu Casa</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Video;