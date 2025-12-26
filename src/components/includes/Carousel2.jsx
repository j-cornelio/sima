import React from "react";
import { Link } from "react-router-dom";
import livingroom from '../../images/sales/riviera_B4/livingroom.jpeg'
import punta_cana from '../../images/sales/Villa_Punta_Cana/drone_view.png'
import samana from '../../images/sales/Villa_Samana/5.jpeg'
import riviera156 from '../../images/sales/riviera_156/6.jpeg'
import riviera_118 from '../../images/sales/riviera_118/livingroom.jpeg'
import balcony from '../../images/sales/paseo_220/balcony.jpg'
import paseo_190 from '../../images/sales/paseo_190/1.jpg'
import paseo_165 from '../../images/sales/paseo_165/24.jpeg'


class Carousel extends React.Component {
    componentDidMount() {
        var swiper = new Swiper(".slide-content", {
                slidesPerView: 3,
                spaceBetween: 25,
                loop: true,
                centerSlide: 'true',
                fade: 'true',
                grabCursor: 'true',
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints:{
                0: {
                    slidesPerView: 1,
                },
                520: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            },
        });
    }

  render() {
      return (
        <div id="Carousel" className="slide-container swiper">
            <h1>Apartamentos destacados</h1>
            <div className="slide-content">
                <div className="card-wrapper swiper-wrapper">

                    {/* Punta Cana - Condotel */}
                    <div className="card swiper-slide">
                        <Link to="./sales/PuntaCana">
                            <div className="image-content">
                                <span className="overlay"></span>
                                <img src={punta_cana} alt="" className="card-img" />
                            </div>
                        </Link>
                        <div className="card-content">
                            <p className="type">CONDOTEL</p>
                            <h3 className="location">Bavaro</h3>
                            <p className="price">VENTA $5,500,000</p>
                            <ul className="description2">
                                <li><i className="fa-solid fa-bed"></i>54 Aptos de 2hbt. De 88M²</li> 
                                <li><i className="fa-solid fa-bed"></i>10 Aptos. De 1hbt. De 70M²</li> 
                                <li><i className="fa-solid fa-car"></i>Piscina</li> 
                                <li><i className="fa-solid fa-car"></i>2 Bares & 1 Restaurante</li> 
                            </ul>          
                             <Link to="./sales/SalesRiviera4B"> 
                                <button className="button">Ver Detalles</button>
                            </Link>
                        </div>
                    </div>
                    {/* carousel - Samana */}
                    <div className="card swiper-slide">
                         <Link to="./sales/Samana"> 
                            <div className="image-content">
                                <span className="overlay"></span>
                                <img src={samana} alt="" className="card-img" />
                              
                            </div>
                       </Link>
                        <div className="card-content">
                            <p className="type">6 VILLAS</p>
                            <h3 className="location">Samana</h3>
                            <p className="price">VENTA $1,800,000</p>
                            <ul className="description2">
                                <li><i className="fa-solid fa-bed"></i>12 Dormitorios</li> 
                                <li><i className="fa-solid fa-bath"></i>15 Baños</li> 
                                <li><i className="fa-solid fa-ruler"></i>28,000  Metros Cuadrados</li>
                            </ul>
                             <Link to="./sales/SalesRiviera4B"> 
                                <button className="button">Ver Detalles</button>
                            </Link>
                        </div>
                    </div>

                                        {/* carousel - Riviera 156 RivieraPentHouse */}
                    <div className="card swiper-slide">
                         <Link to="./sales/RivieraPentHouse">
                            <div className="image-content">
                                <span className="overlay"></span>
                                <img src={riviera156} alt="" className="card-img" />
                            </div>
                        </Link>
                        <div className="card-content">
                            <p className="type">APARTAMENTO</p>
                            <h3 className="location">Santo Domingo Este</h3>
                            <p className="price">Precio: $280,000 negociable</p>
                            <ul className="description2">
                                <li><i className="fa-solid fa-bed"></i>3 Dormitorios</li> 
                                <li><i className="fa-solid fa-bath"></i>3.5 Baños</li> 
                                <li><i className="fa-solid fa-car"></i>2 Aparcamientos</li> 
                                <li><i className="fa-solid fa-ruler"></i>156  Metros Cuadrados</li>
                            </ul>
                             <Link to="./sales/RivieraPentHouse"> 
                                <button className="button">Ver Detalles</button>
                            </Link>
                        </div>
                    </div>

                    {/* Riviera B4 */}
                    <div className="card swiper-slide">
                        <Link to="./sales/SalesRiviera4B">
                            <div className="image-content">
                                <span className="overlay"></span>
                                <img src={livingroom} className="card-img" width="160px" />
                            </div>
                        </Link>
                        <div className="card-content">
                            <p className="type">APARTAMENTO</p>
                            <h3 className="location">Villa Duarte Viejo</h3>
                            <p className="price">VENTA $230,000/Alquila $1,700 m</p>
                            <ul className="description2">
                                <li><i className="fa-solid fa-bed"></i>3 Dormitorios</li> 
                                <li><i className="fa-solid fa-bath"></i>2.5 Bath</li> 
                                <li><i className="fa-solid fa-car"></i>2 Aparcamientos</li> 
                                <li><i className="fa-solid fa-ruler"></i>135  Metros Cuadrados</li>
                            </ul>
                            <Link className="navbar-brand" to="./sales/SalesRiviera4B">
                                <button className="button">Ver Detalles</button>
                            </Link>
                        </div>
                    </div>

                    {/* carousel - Riviera 118  */}
                    <div class="card swiper-slide">
                         <Link to="./sales/Riviera118"> 
                            <div class="image-content">
                                <span class="overlay"></span>
                                <img src={riviera_118} alt="" class="card-img" />
                            </div>
                        </Link>
                        <div class="card-content">
                            <p class="type">APARTAMENTO</p>
                            <h3 class="location">Villa Duarte Viejo</h3>
                            <p class="price">VENTA $185,000/Alquilar $1,500 m</p>
                            <ul class="description2">
                                <li><i class="fa-solid fa-bed"></i>3 Dormitorios</li> 
                                <li><i class="fa-solid fa-bath"></i>2.5 Baños</li> 
                                <li><i class="fa-solid fa-car"></i>2 Aparcamientos</li> 
                                <li><i class="fa-solid fa-ruler"></i>118 Metros Cuadrados</li>
                            </ul>
                             <Link to="./sales/Riviera118"> 
                                <button class="button">Ver Detalles</button>
                            </Link>
                        </div>
                    </div>
                    {/* carousel - Paseo 220 */}
                    <div className="card swiper-slide">
                        <div className="image-content">
                        <span className="overlay"></span>
                        <a href="https://sima-rd.com/sales-paseo220"> 
                            <img src={balcony} alt="" className="card-img" />
                        </a>
                        </div>
                        <div className="card-content">          
                            <p className="type">APARTAMENTO</p>
                            <h3 className="location">Paseo del Carmen</h3>
                            <p className="price">VENTA $377,000</p>
                            <ul className="description2">
                                <li><i className="fa-solid fa-bed"></i>3 Dormitorios</li> 
                                <li><i className="fa-solid fa-bath"></i>3.5 Baños</li> 
                                <li><i className="fa-solid fa-car"></i>3 Aparcamientos</li> 
                                <li><i className="fa-solid fa-ruler"></i>220 Metros Cuadrados</li>
                            </ul>
                            <a href="https://sima-rd.com/sales-paseo220"> 
                                <button className="button">Ver Detalles</button>
                            </a>
                        </div>
                    </div>
                    {/* carousel - Paseo 190 */}
                    <div class="card swiper-slide">
                        <div class="image-content">
                        <span class="overlay"></span>
                        <a href="https://sima-rd.com/sales-paseo190">
                            <img src={paseo_190} alt="" class="card-img" />
                        </a>
                        </div>
                        <div class="card-content">
                            <p class="type">APARTAMENTO</p>
                            <h3 class="location">Paseo del Carmen</h3>
                            <p class="price">VENTA $390,800</p>
                            <ul class="description2">
                                <li><i class="fa-solid fa-bed"></i>3 Dormitorios</li> 
                                <li><i class="fa-solid fa-bath"></i>3.5 Baños</li> 
                                <li><i class="fa-solid fa-car"></i>3 Aparcamientos</li> 
                                <li><i class="fa-solid fa-ruler"></i>190 Metros Cuadrados</li>
                            </ul>
                            <a href="https://sima-rd.com/sales-paseo190"> 
                                <button class="button">Ver Detalles</button>
                            </a>
                        </div>
                    </div>
                    {/* carousel - Paseo 165 */}
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>
                            <a href="https://sima-rd.com/sales-paseo165"> 
                                <img src={paseo_165} alt="" class="card-img" />
                            </a>
                        </div>
                        <div class="card-content">
                            <p class="type">APARTAMENTO</p>
                            <h3 class="location">Paseo del Carmen</h3>
                            <p class="price">VENTA $335,000</p>
                            <ul class="description2">
                                <li><i class="fa-solid fa-bed"></i>3 Dormitorios</li> 
                                <li><i class="fa-solid fa-bath"></i>3.5 Baños</li> 
                                <li><i class="fa-solid fa-car"></i>3 Aparcamientos</li> 
                                <li><i class="fa-solid fa-ruler"></i>165 Metros Cuadrados</li>
                            </ul>
                            <a href="https://sima-rd.com/sales-paseo165"> 
                                <button class="button">Ver Detalles</button>
                            </a>
                        </div>
                    </div>

                    {/* cards end */}
                </div>
            </div>
            <div className="swiper-button-next swiper-navBtn"></div>
            <div className="swiper-button-prev swiper-navBtn"></div>
            <div className="swiper-pagination"></div>
        </div>
    )
  }
} 

export default Carousel;