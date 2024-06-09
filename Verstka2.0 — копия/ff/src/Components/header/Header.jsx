import { useState } from 'react'
import './App.css'

function Header() {
  return (
   <header className='header'>
    <div className="container">
      <nav className="menu">
      <h1 className="header-logo">sense of life</h1>
      <div class="box">
        <form name="search">
        <input type="search" class="input" placeholder='Поиск музыки, исполнителя...' name="txt" onmouseout="this.value = ''; this.blur();" />
        </form>
        <i class="fas fa-search"></i>
      </div>
      <div className="nav-manu">
        <li className='nav-menu-item__link'><a className='nav-menu-item__link' href="">Главная</a></li>
        <li className='nav-menu-item__link'><a className='nav-menu-item__link' href="">Моя музыка</a></li>
      </div>
      <div className="user-accout">
      <a className='user-accout__link' href=""><span class="material-symbols-outlined">account_circle</span></a>
      </div>
      </nav>
    </div>
   </header>
  )
}

export default Header
