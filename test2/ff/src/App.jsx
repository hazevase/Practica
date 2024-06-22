import React from 'react'
import { Route, Routes } from "react-router-dom";
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

function App() {
  const user = localStorage.getItem("token");
  return (
   <Routes>
    <Route path='/' element = {<Layout />}>
        <Route index element = {<Reg />}/>
        <Route path='/login' element = {<Login />}/>
        {user && <Route path='/Main' exact element = {<Glav />}/>}
        {user &&<Route path='/MyMusic' element= {<MyM />}/>}
        {user &&<Route path='/Account' element = {<ACC />}/>}
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
