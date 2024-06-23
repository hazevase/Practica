import React, {useEffect, useState} from 'react'
import { Route, Routes, useActionData } from "react-router-dom";
import Glav from './pages/mainpage/glav.jsx'
import MyM from './pages/mymusic/mymusic.jsx'
import ACC from './pages/account/account.jsx'
import Reg  from './pages/registration/reg.jsx'
import Layout  from './Components/layout.jsx'
import Login from "./pages/login/log.jsx";
import AlbumList from './pages/serchmusicjanr/searchalbum.jsx';
import Electron from './pages/janr_page/elecron/eletcron.jsx'
import Pop from './pages/janr_page/pop/pop.jsx'
import Rock from './pages/janr_page/rock/rock.jsx'
import Rap from './pages/janr_page/rep/rep.jsx'
import Shanson from './pages/janr_page/shanson/shanson.jsx'
import { jwtDecode } from "jwt-decode";




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

  const role = localStorage.getItem('role');
 
 
  return (
    
   <Routes>
    
    <Route path='/' element = {<Layout />}>
        <Route index element = {<Reg />}/>
        <Route path='/login' element = {<Login />}/>
       <Route path='/Main' element = {<Glav />} />
        <Route path='/MyMusic' element= {<MyM />}/>
        <Route path='/Account' element = {<ACC />}/>
        <Route path='/Album' element = {<AlbumList />}/>
        <Route path='/Elec' element = {<Electron />}/>
        <Route path='/Pop' element = {<Pop />}/>
        <Route path='/Rock' element = {<Rock />}/>
        <Route path='/Rap' element = {<Rap />}/>
        <Route path='/Shan' element = {<Shanson />}/>
    </Route>
   </Routes>
   
  )
}

export default App
