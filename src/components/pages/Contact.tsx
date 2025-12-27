import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

type NewErrors = { name: string; email: string; }
type Error = { name: string; }

function Contact () {
  const [formData, setformData] = useState({name: "", email: ""});
  const [error, setError] = useState({ name: "", email: "" });

  const validate = () => {
    let newErrors: NewErrors = { name: "", email: "" };
    if(!formData.name){ newErrors.name = "Name is required" }
    if(!formData.email){ newErrors.email = "Email is required" }

    setError(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: any) => {
    setformData({...formData, [e.target.name]: e.target.value})
    console.log('formData - ', formData)
    
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(validate()){
      alert("form submitted");
      console.log(formData)
    }
  }

    return (
    <>
      <Header />
      <div id="contact" className="container">
          <div className="livingroom">
            <h1>Mejor Servicio Inmobilario en Santo Domingo</h1>
            <h2>¡Póngase en contacto con nosotros para obtener asesoramiento inmobiliario experto y un servicio personalizado!</h2>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Name</label>
              <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} />
            
              {error.name && <p style={{color: 'red'}}>{error.name}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Email</label>
              <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} />

              {error.email && <p style={{color: 'red'}}>{error.email}</p>}
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
      <Footer />
    </>
    )
}

export default Contact;