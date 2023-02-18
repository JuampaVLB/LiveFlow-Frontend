import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

// Web Sockets

const socket = io.connect('liveflow-backend-production.up.railway.app');

function App() {

  // socket.on('probando', {
  //   body: 'HOLA MUNDO'
  // })

  return (
    <>
      <Header/>
        <Home/>
      <Footer/>
    </>
  )
}

export default App
