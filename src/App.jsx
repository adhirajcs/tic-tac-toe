import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Board from './Extra/HomeReactDoc'

// import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='' element={< Home />}/>
        <Route path='/reactdocttt' element={< Board />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
