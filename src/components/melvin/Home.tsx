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
          <h1 className="warm-color"><span>Construyendo</span><br />Para El Futuro</h1>

          <div className="mouse">
              <span></span>
          </div>
      </div>

      <div className="row content">
        <div className="about sec01 anchor-target">
            <br />
            <h2>Quien Somos</h2>
            <h1>Serviendo Bavaro por mas de <br />20 Anos</h1>
            <p>With over 300 successful restoration and new construction projects under our belt, MGR Restoration Inc. attributes its achievements to clear communication, dedicated leadership and a strategic delivery of our commitments.</p>
        </div>  
        <div className="sec02 services sec01 anchor-target">
            <h1>Servicios</h1>
            <div className="row">
                <div className="col-md-4">
                    <h2>Roofing</h2>
                </div>
                <div className="col-md-4">
                    <h2>Roofing</h2>
                </div>
                <div className="col-md-4">
                    <h2>Roofing</h2>
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