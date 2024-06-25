import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Home from './Home'
import Board from './Extra/HomeReactDoc'
import TicTacToe from './components/TicTacToe'

// import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='' element={< TicTacToe />}/>
        <Route path='/reactdocttt' element={< Board />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
