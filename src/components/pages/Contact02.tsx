import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

//https://www.youtube.com/watch?v=eDTJSty3QZc

function Contact () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault()

    let fData = new FormData();
    fData.append('name', name);
    fData.append('email', email);
    fData.append('message', message);
console.log('fData - ', fData)
  }

    return (
    <>
      <Header />
      <div id="contact" className="container">
          <div className="livingroom">
            <h1>TEST: Mejor Servicio Inmobilario en Santo Domingo</h1>
            <h2>¡Póngase en contacto con nosotros para obtener asesoramiento inmobiliario experto y un servicio personalizado!</h2>
          </div>
          
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Name</label>
              <input className="form-control" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Email</label>
              <input type="text" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Message</label>
              <textarea className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
      </div>
      <Footer />
    </>
    )
}

export default Contact;