import React from "react";
import video from '../../images/sales/Villa_Punta_Cana/video1.mp4'

function Video () {
    return ( 
        <div id="video">
            <video height="600px" width="100%" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className="info">
                <h1>¿Listo para comenzar un nuevo capítulo?</h1>
                <button>Compra Tu Casa</button>
                <button>Vende Tu Casa</button>
            </div>
        </div>
    )
}

export default Video;