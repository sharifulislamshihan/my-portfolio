import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=" relative bg-cover bg-fixed bg-center min-h-screen" style={{
      backgroundImage: `url(https://i.ibb.co/cXHvXP1/wepik-export-20240308144118-C2wa.png)`
    }}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
