import React from 'react'
import { Route, Routes } from "react-router-dom";
import Glav from './Components/mainpage/glav.jsx'
import MyM from './Components/mymusic/mymusic.jsx'
import ACC from './Components/account/account.jsx'
import Reg  from './Components/registration/reg.jsx'
import Layout  from './Components/layout.jsx'

function App() {
  return (
   <Routes>
    <Route path='/' element = {<Layout />}>
        <Route index element = {<Reg />}/>
        <Route path='/Main' element = {<Glav />}/>
        <Route path='/MyMusic' element= {<MyM />}/>
        <Route path='/Account' element = {<ACC />}/>
    </Route>
   </Routes>
  )
}

export default App
