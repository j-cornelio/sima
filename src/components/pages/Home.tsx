import Carousel from "../includes/Carousel";
import Video from "./Video";
import lux_room from "../../images/lux_livingroom.jpg";
import bedroom from "../../images/bedroom.png";


function Home () {
    return (
        <div className="container-fluid">
            <div className="card mt-4">            
                <div className="card-body">
                    <Video />
                    <Carousel />
                    <div>
                        <p>SimaRD Es una empresa inmobiliaria local que ofrece las mejores casas y oportunidades de inversión de la zona.</p>
                    </div>
                    <div className="row block block1">
                        <div className="col-md-6">
                            <img src={lux_room} width="500px" />
                        </div>
                        <div className="col-md-6">
                            <h3>Conocimiento local. Alcance conectado.</h3>
                            <p>Nuestro equipo conoce su vecindario a la perfección y le ofrece una guía confiable en cada paso de su proceso inmobiliario. Nos tomamos el tiempo necesario para comprender sus objetivos, ya sea que busque comprar su primera casa, vender su propiedad actual o encontrar su próxima inversión. Mediante estrategias de marketing específicas, fotografía profesional y las últimas herramientas digitales, nos aseguramos de que su propiedad destaque en el mercado y llegue a los compradores adecuados. Con una red de contactos y un compromiso con la comunicación fluida, nos encargamos de todos los detalles para que pueda avanzar con confianza, sabiendo que su casa está en manos de expertos locales que se preocupan por su éxito.</p>
                            <button>COMIENZE SU VENTA</button>
                        </div>
                    </div>
                   <div className="row block2">
                        <div  className="col-md-6">
                            <h1>Proceso de transacción</h1>
                            <p>Los agentes inmobiliarios guían a los clientes a través de contratos, negociaciones, precios y documentación legal, ofreciendo asesoramiento experto y personalizado.</p>                        
                        </div>
                        <div className="col-md-6">
                            <h1>Consejos de expertos</h1>
                            <p>Los agentes inmobiliarios ofrecen información profesional y estrategias personalizadas para garantizar que los clientes tomen decisiones informadas en sus transacciones inmobiliarias.</p>
                        </div>
                    </div>
                    <div className="row block3">
                        <div className="col-md-6">
                            <h1>¿Quiere vender su casa? ¡Llámenos hoy para obtener asesoramiento inmobiliario experto!</h1>
                            <p>¡Contáctenos ahora y nuestros expertos se comunicarán con usted lo antes posible!</p>
                            <button>PONTE EN CONTACTO</button>
                        </div>
                        <div className="col-md-6">
                            <img src={bedroom} width="500px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;