import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from "react-router-dom"
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './Contextdata'

export default function App() {
  const[app,setApp]=useState(" abcd ");
  return (
    <div>
    <Context.Provider value={app}>

  
        <Header xyz={setApp}/>

        <Outlet/>
        </Context.Provider>
        <Footer/>
</div>
  )
}
