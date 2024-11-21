import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Detalhetipo from './pages/Detalhetipo.jsx'
import Info from './pages/Info.jsx'
import Beneficios from './pages/Beneficio.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: 'tipoenergia/:slug',
        element:<Detalhetipo/>
      },
      {
        path: 'info',
        element:<Info/>
      },
      {
        path: 'beneficio',
        element:<Beneficios/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
