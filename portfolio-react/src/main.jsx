import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.min.css'
import 'uikit/dist/css/uikit.min.css'
import {FaBeer} from "@react-icons/all-files/fa/FaBeer";



import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
