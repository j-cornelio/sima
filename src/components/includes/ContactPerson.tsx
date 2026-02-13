import { Link } from "react-router-dom";                

function ContactPerson () {
    return (
        <div>
            <h1>Contactanos</h1>
            <div id="ron-image"></div>
            <h3>Ronny Sepulveda</h3>
            <p>Agente & administrador de propiedades</p>
            
            <div className="whatsapp">
                <a href="https://wa.me/118495078318?text=%E2%80%8E%20Saludos" target="_blank" className="w-link">
                <i className="fa-brands fa-whatsapp"></i>
                Abre WhatsApp
                </a>
            </div>
            <div className="phone">
                <Link to="tel:849-507-8318">
                    <i className="fa-solid fa-phone"></i>
                    LLAMENOS
                </Link>
            </div>
            <div className="email">           
                <a href="mailto:empjulio@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    ENVIAR CORREO
                </a>
            </div>            
        </div>
    )
}

export default ContactPerson;