import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/header/Header.jsx'
// import Reg from './Components/registration/reg.jsx'
import Footer from './Components/footer/footer.jsx'
import Glav from './Components/mainpage/glav.jsx'
import ACC from './Components/account/account.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <ACC />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
