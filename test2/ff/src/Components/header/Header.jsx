import { jwtDecode } from "jwt-decode";
import './App.css'
import { Link } from 'react-router-dom';
import React from 'react'

function Header() {

  const role = localStorage.getItem('role');

  return (
    <header className='header'>
      <div className="container">
        <nav className="menu">
          <Link to="/" className="header-logo">sense of life</Link>

          <div className="nav-manu">
            {role === 'user' && (
              <li className='nav-menu-item__link'>
                <Link to="/Main" className='nav-menu-item__link' href="">Главная</Link>
              </li>
            )}

            {role === 'user' && (
              <li className='nav-menu-item__link'>
                <Link to="/Album" className='nav-menu-item__link' href="">Альбомы</Link>
              </li>
            )}
            {role === 'admin' && (
              <li className='nav-menu-item__link'>
                <Link className="nav-menu-item__link" to="/AdminPage">Админ Панель</Link>
              </li>
            )}

            {role === 'admin' && (
              <li className='nav-menu-item__link'>
                <Link className="nav-menu-item__link" to="/Chars">Графики</Link>
              </li>
            )}
          </div>
          <div className="user-accout">
            <Link to="Account" className='user-accout__link' href=""><span class="material-symbols-outlined">account_circle</span></Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
