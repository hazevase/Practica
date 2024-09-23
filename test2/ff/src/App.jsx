import React, { useEffect, useState } from 'react'
import { Route, Routes, useActionData } from "react-router-dom";
import Glav from './pages/mainpage/glav.jsx'
// import MyM from './pages/mymusic/mymusic.jsx'
import ACC from './pages/account/account.jsx'
import Reg from './pages/registration/reg.jsx'
import Layout from './Components/layout.jsx'
import Login from "./pages/login/log.jsx";
import AlbumList from './pages/serchmusicjanr/searchalbum.jsx';
import Electron from './pages/janr_page/elecron/eletcron.jsx'
import Pop from './pages/janr_page/pop/pop.jsx'
import Rock from './pages/janr_page/rock/rock.jsx'
import Rap from './pages/janr_page/rep/rep.jsx'
import Shanson from './pages/janr_page/shanson/shanson.jsx'
import News from './pages/favoriets/news/news.jsx'
import Recom from './pages/favoriets/recomendation/recomendation.jsx'
import Top from './pages/favoriets/top-charts/top.jsx'
import Playlist from './pages/favoriets/playlist-day/playlist.jsx'
import AdminPage from './pages/AdminPage/AdminPage.jsx'
import Chars from './pages/charspage/chars.jsx'
import { jwtDecode } from "jwt-decode";
import './index.css'




function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      // Декодируем токен
      const decoded = jwtDecode(token);
      // Помещаем данные из токена в localStorage
      localStorage.setItem('userId', decoded._id);
      localStorage.setItem('email', decoded.email);
      localStorage.setItem('role', decoded.role);

    }
  }, []);


  const user = localStorage.getItem('token');


  return (

    <Routes>

      <Route path='/' element={<Layout />}>

        {/* Основные страницы */}
        <Route index element={<Reg />} />
        <Route path='/login' element={<Login />} />
        {user && <Route path='/Main' element={<Glav />} />}
        {user && <Route path='/Account' element={<ACC />} />}
        {user && <Route path='/Album' element={<AlbumList />} />}


        {/* Страницы жанров  */}
        <Route path='/Elec' element={<Electron />} />
        <Route path='/Pop' element={<Pop />} />
        <Route path='/Rock' element={<Rock />} />
        <Route path='/Rap' element={<Rap />} />
        <Route path='/Shan' element={<Shanson />} />

        <Route path='/AdminPage' element={<AdminPage />} />
        <Route path='/Chars' element={<Chars />} />

        {/* Блоки с разной тематикой */}
        <Route path='/News' element={<News />} />
        <Route path='/Recomendations' element={<Recom />} />
        <Route path='/Top-charts' element={<Top />} />
        <Route path='/Playlist-Day' element={<Playlist />} />
      </Route>
    </Routes>

  )
}

export default App
