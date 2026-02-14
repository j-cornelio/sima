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
          
        <div className="row align-items-start">
        <div className="col">
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
        <div  className="col">
          <div className="whatsapp">
            <div className="p-6">
              <div className="w-inner">
                <div  className="w-icon-wrapper flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <i className="fa-brands fa-whatsapp"></i>
                  </div><div>
                    <h3 className="font-display text-lg font-semibold text-foreground">WhatsApp - Respuesta Rápida</h3>
                    <p className="mt-1 font-body text-sm text-muted-foreground">¿Prefieres una respuesta inmediata? Escríbenos directamente por WhatsApp.</p>
                    <br />
                <a href="https://wa.me/118495078318?text=%E2%80%8E%20Saludos" target="_blank" className="w-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle mr-2 h-4 w-4">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                    Abrir WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          <div className="phone flex items-start gap-4">
            <div className="phone-email-loc h-10 w-10 shrink-0 items-center justify-center">
              <a href="tel:8095550123"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>
            </div>
            <div>
              <p className="font-body font-medium text-foreground">
                <a href="tel:8495078318">Teléfono</a></p>
              <p className="font-body text-muted-foreground"><a href="tel:8495078318">(849) 507-8318</a></p>
            </div>
          </div>

          <div className="email flex items-start gap-4">
            <div className="phone-email-loc flex h-10 w-10 shrink-0 items-center justify-center">
              <a href="mailto:empjulio@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></a>
            </div>
            <div>
              <p className="font-body font-medium text-foreground">Correo electrónico</p>
              <p className="font-body text-muted-foreground"><a href="mailto:empjulio@gmail.com">empjulio@gmail.com</a></p>
            </div>
          </div>

          <div className="map flex items-start gap-4">
            <div className="phone-email-loc flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-prime">
              <a target="_blank" href="https://share.google/9dEmPje0GJHvNRqe2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin h-5 w-5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></a>
            </div>
            <div>
              <p className="font-body font-medium text-foreground">Ubicación</p>
              <p className="font-body text-muted-foreground"><a target="_blank" href="https://share.google/9dEmPje0GJHvNRqe2">Zona Colonial, Santo Domingo<br />República Dominicana</a></p>
            </div>
          </div>

        </div>
        </div>
      </div>
      <Footer />
    </>
    )
}

export default Contact;