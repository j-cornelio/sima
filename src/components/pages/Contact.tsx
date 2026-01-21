import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

type NewErrors = { name: string; email: string; }
type Error = { name: string; }


function Contact () {
    const [formData, setformData] = useState({name: "", email: ""});
    const [values, setValues] = useState({name: "", email: "", message: ""});
    const [error, setError] = useState({ name: "", email: "" });

    const validate = () => {
      let newErrors: NewErrors = { name: "", email: "" };

      setError(newErrors)

      return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: any) => {
        setValues({...values, [e.target.name]: [e.target.value]})
    }
    
    const handleSubmit = (e: any) => {
      e.preventDefault()
      {/*
        if(validate()){
          alert("form submitted");
          console.log(formData)
        }
      */}
          
          axios.post('https://sima-rd.net/api/signup', values)
              .then(res => console.log("values - ", values))
              .catch((err) => console.log('error: ', err))
    }

    return (
    <>
      <Header />
      <div id="contact" className="container">
          <div className="livingroom">
            <h1>x. Mejores Servicios Inmobilario en Santo Domingo.</h1>
            <h2>¡Póngase en contacto con nosotros para obtener asesoramiento inmobiliario experto y un servicio personalizado!</h2>
          </div>
          
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Name</label>
              <input className="form-control" type="text" name="name"  onChange={handleChange} />
            
              {error.name && <p style={{color: 'red'}}>{error.name}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Email</label>
              <input type="text" className="form-control" name="email" onChange={handleChange} />

              {error.email && <p style={{color: 'red'}}>{error.email}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Message</label>
              <textarea className="form-control" name="message" onChange={handleChange} />
            </div>
              <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
      <Footer />
    </>
    )
}

export default Contact;