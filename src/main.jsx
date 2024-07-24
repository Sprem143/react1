import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx';
import FixedIcon from './FixedIcon.jsx';
import Footer from './Footer.jsx';
import "animate.css/animate.compat.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <FixedIcon/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
