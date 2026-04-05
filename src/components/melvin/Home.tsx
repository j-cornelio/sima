import logo from './images/logo_horizontal.png';
import Project from "./includes/Project";
import ProjectFinished from "./includes/ProjectFinished";

function Home() {
  return (
    <div id="sticky">
      <header className='second-header'>
            <div className="row">
                <img className="logo" src={logo} />
                <nav>
                    <ul>
                        <li><a href=".sec01">SOBRE NOSOTROS</a></li>
                        <li><a href=".sec02">SERVICIOS</a></li>
                        <li><a href=".sec03">PROJECTOS</a></li>
                    </ul>
                </nav>
            </div>
        </header>
      
      <div className="hero">
          <h1>Construyendo Para El Futuro</h1>
          <p>Ven a explorar las posibilidades</p>
      </div>

      <div className="row content">
        <div className="about sec01 anchor-target">
            <h2>Quien Somos</h2>
            <h1>Serviendo Bavaro por mas de</h1>
            <h1>20 años</h1>
            <br />
            <p>Con más de ### proyectos exitosos de nueva construcción en nuestro haber, Aceros & Encofrados M&T atribuye sus logros a una comunicación clara, un liderazgo dedicado y un cumplimiento estratégico de nuestros compromisos.</p>
        </div>  
        <div className="sec02 services sec01 anchor-target">
            <h1>Servicios</h1>
            <h3>Especializamos en todo de trabajo en el sector de construcción</h3>
            <h2>Construimos los siguentes:</h2>
            <div className="row">
                <div className="col-md-4">
                    <h1><span>01.</span>Torres</h1>
                </div>
                <div className="col-md-4">
                    <h1><span>02.</span>Edificios</h1>
                </div>
                <div className="col-md-4">
                    <h1><span>03.</span>Villas</h1>
                </div>
            </div>
        </div>
        <div className="sec03 projects sec01 anchor-target">
            <h1>Proyectos Destacados</h1>
            <Project />
        </div>
      </div>      
    </div>
  )
} 

export default Home;