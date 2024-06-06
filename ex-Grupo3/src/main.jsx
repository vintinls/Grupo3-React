import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AxiosUsuarios from "./Components/AxiosUsuarios.jsx"
import ListagemUsuario from './Components/ListagemUsuario.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListagemUsuario/>
  </React.StrictMode>,
)
