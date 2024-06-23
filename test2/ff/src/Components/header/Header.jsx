import { jwtDecode } from "jwt-decode";
import './App.css'
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react'

function Header() {

  // const [role, setRole] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     try {
  //       const decoded = jwtDecode(token);
  //       setRole(decoded.role);
  //     } catch (error) {
  //       console.error('Ошибка при декодировании токена:', error);
  //     }
  //   }
  // }, []);



  const role = localStorage.getItem('role');


  return (
   <header className='header'>
    <div className="container">
      <nav className="menu">
      <Link to="/" className="header-logo">sense of life</Link>
      
      <div className="nav-manu">
        <li className='nav-menu-item__link'><Link to="/Main" className='nav-menu-item__link' href="">Главная</Link></li>
        <li className='nav-menu-item__link'><Link to="/MyMusic" className='nav-menu-item__link' href="">Моя музыка</Link></li>
        <li className='nav-menu-item__link'><Link to="/Album" className='nav-menu-item__link' href="">Альбомы</Link></li>
        {role === 'admin' && (
          <li className='nav-menu-item__link'>
            <Link className="nav-menu-item__link" to="/AdminPage">Админ Панель</Link>
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
