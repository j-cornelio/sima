import { Link } from "react-router-dom";                

function ContactPerson () {
    return (
        <div>
            <h1>Contactanos</h1>
            <div id="ron-image"></div>
            <h3>Ronny Sepulveda</h3>
            <p>Agente & administrador de propiedades</p>
            
            <div className="whatsapp">
                <a href="https://w.app/simard" target="_blank" rel="noopener noreferrer" className="w-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle mr-2 h-4 w-4">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                    Abrir WhatsApp
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