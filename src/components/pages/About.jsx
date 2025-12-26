import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom"

function About () {
    return (
    <>
      <Header />
      <div className="container">
            <div className="card mt-4">            
                <div className="card-body">
                    <h2>About Us Page</h2>
                    <Link to="/rentals">
                     <button>Go to rentals</button>
                    </Link>
                </div>
            </div>
      </div>
      <Footer />
    </>
    )
}

export default About;