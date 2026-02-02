import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function Contact () {
    const [values, setValues] = useState({name: "", email: "", phone: "", message: ""});
    const [result, setResult] = useState("");
      
    const handleChange = (e: any) => {
        setValues({...values, [e.target.name]: [e.target.value]})
    }
    
    const onSubmit = async (event: any) => {
      event.preventDefault()
      
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "b79328e5-f63f-4278-9e6b-8e8595d2b6ce");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setResult(data.success ? "Success!" : "Error");

      console.log('VALUES SENT - ', values)

      axios.post('https://api.sima-rd.net/contact', values)    
              .then(res => console.log("CONNECTED! - values -> ", values))
              .catch((err) => console.log('error: ', err))
    }

    return (
    <>
      <Header />
      <div id="contact" className="container">
          <div className="livingroom">
            <h1>Mejores Servicios Inmobilario en Santo Domingo.</h1>
            <h2>¡Póngase en contacto con nosotros para obtener asesoramiento inmobiliario experto y un servicio personalizado!</h2>
          </div>
          
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input onChange={handleChange} className="form-control" type="text" name="name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input  onChange={handleChange} type="text" className="form-control" name="email" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Celular</label>
              <input  onChange={handleChange} type="text" className="form-control" name="phone" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea  onChange={handleChange} className="form-control" name="message" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

            <p>{result}</p>
          </form>
      </div>
      <Footer />
    </>
    )
}

export default Contact;