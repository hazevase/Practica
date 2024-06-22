import React from 'react'
import { Route, Routes } from "react-router-dom";
import Glav from './pages/mainpage/glav.jsx'
import MyM from './pages/mymusic/mymusic.jsx'
import ACC from './pages/account/account.jsx'
import Reg  from './pages/registration/reg.jsx'
import Layout  from './Components/layout.jsx'
import Login from "./pages/login/log.jsx";

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
    </Route>
   </Routes>
  )
}

export default App
