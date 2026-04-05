
function Footer() {
  return (
    <>
      <footer>
            <div className="row">
                <div className="col-md-6">
                    <h2>Estaremos encantados de hablar con usted sobre sus necesidades. </h2>
                </div>
                <div className="col-md-3">
                    <h3>Enlaces Rápidos</h3>
                     <nav>
                        <ul>
                            <li><a href=".sec01">SOBRE NOSOTROS</a></li>
                            <li><a href=".sec02">SERVICIOS</a></li>
                            <li><a href=".sec03">PROJECTOS</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-3">
                    <h3>CONTACTANOS</h3>
                        <ul>
                          <li><a href="tel:8095550123"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>(829) 764-3951</a></li>
                          <li><a href="mailto:empjulio@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>aceros&encofrados@gmail.com</a></li>
                          <li><a href=".sec03">ubicacion?</a></li>
                        </ul>

                </div>
            </div>
      </footer>
    </>
  )
} 

export default Footer;