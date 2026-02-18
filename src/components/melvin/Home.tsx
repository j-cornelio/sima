import logo from './images/logo_horizontal.png';

function Home() {
  return (
    <div id="sticky">
      <header className='second-header'>
            <div className="row">
                <img className="logo" src={logo} />

                <div className="mobile-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

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
          <h1 className="warm-color"><span>Construyendo</span><br /><span style={{}}>Para El Futuro</span></h1>
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
            <h2>todo lo que tenga que ver en el sector construcción</h2>
            <p>No nos regimos por reglas preconcebidas. Nos movemos con rapidez, pensamos con agudeza y construimos espacios que llaman la atención. Sin excusas ni aburrimiento: solo resultados que impactan con más fuerza que el statu quo.</p>
            <h2>Construimos</h2>
            <div className="row">
                <div className="col-md-4">
                    <h2>Torres</h2>
                </div>
                <div className="col-md-4">
                    <h2>Edificios</h2>
                </div>
                <div className="col-md-4">
                    <h2>Villas</h2>
                </div>
            </div>
        </div>
        <div className="sec03 projects sec01 anchor-target">
            <br />
            <h1>Projectos</h1>
            <div className="row">
                <div className="col-md-4">
                    <h2>Protjecto 1</h2>
                </div>
                <div className="col-md-4">
                    <h2>Protjecto 2</h2>
                </div>
                <div className="col-md-4">
                    <h2>Protjecto 3</h2>
                </div>
            </div>
        </div>
      </div>      
    </div>
  )
} 

export default Home;