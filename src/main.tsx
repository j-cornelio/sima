import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contact from './components/pages/Contact'
import FormComponent from './components/pages/FormComponent.tsx'
import Sales from './components/pages/Sales'
import Rentals from './components/pages/Rentals'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import 'bootstrap/dist/css/bootstrap.css'
import Riviera4B from './components/pages/sales/Riviera-4B'
import Samana from './components/pages/sales/Samana'
import PuntaCana from './components/pages/sales/PuntaCana'
import RivieraPentHouse from './components/pages/sales/RivieraPentHouse'
import Riviera118 from './components/pages/sales/Riviera118'
import Paseo220 from './components/pages/sales/Paseo220'
import Paseo190 from './components/pages/sales/Paseo190'
import Paseo165 from './components/pages/sales/Paseo165'
import Riviera135 from './components/pages/sales/Riviera135'
import Riviera115 from './components/pages/sales/Riviera115'
import Riviera84 from './components/pages/sales/Riviera84'
import RentalsRiviera4B from './components/pages/rentals/Riviera-4B'
import RentalsRiviera118 from './components/pages/rentals/Riviera118'
import RentalsPaseo165 from './components/pages/rentals/Paseo165'

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"*", element: <NotFound />},
  {path:"/contact", element: <Contact />},
  {path:"/FormComponent", element: <FormComponent />},
  {path:"/sales", element: <Sales />},
  {path:"/about", element: <About />},
  {path:"/rentals", element: <Rentals />},
  {path:"/sales/riviera-4b", element: <Riviera4B />},
  {path:"/sales/Samana", element: <Samana />},
  {path:"/sales/PuntaCana", element: <PuntaCana />},
  {path:"/sales/RivieraPentHouse", element: <RivieraPentHouse />},
  {path:"/sales/Riviera118", element: <Riviera118 />},
  {path:"/sales/Paseo220", element: <Paseo220 />},
  {path:"/sales/Paseo220", element: <Paseo220 />},
  {path:"/sales/Paseo190", element: <Paseo190 />},
  {path:"/sales/Paseo165", element: <Paseo165 />},
  {path:"/sales/Riviera135", element: <Riviera135 />},
  {path:"/sales/Riviera115", element: <Riviera115 />},
  {path:"/sales/Riviera84", element: <Riviera84 />},
  {path:"/rentals/Riviera4B", element: <RentalsRiviera4B />},
  {path:"/rentals/Riviera118", element: <RentalsRiviera118 />},
  {path:"/rentals/Paseo165", element: <RentalsPaseo165 />}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
)
