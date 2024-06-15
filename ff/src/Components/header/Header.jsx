
import './App.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
   <header className='header'>
    <div className="container">
      <nav className="menu">
      <Link to="/" className="header-logo">sense of life</Link>
      <div class="box">
        <form name="search">
        <input type="search" class="input" placeholder='Поиск музыки, исполнителя...' name="txt" onmouseout="this.value = ''; this.blur();" />
        </form>
        <i class="fas fa-search"></i>
      </div>
      <div className="nav-manu">
        <li className='nav-menu-item__link'><Link to="/Main" className='nav-menu-item__link' href="">Главная</Link></li>
        <li className='nav-menu-item__link'><Link to="/MyMusic" className='nav-menu-item__link' href="">Моя музыка</Link></li>
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
