import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// import Home from './Home'
import Board from "./Extra/HomeReactDoc";
import TicTacToe from "./components/TicTacToe";

// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<TicTacToe />} />
          <Route path="/reactdocttt" element={<Board />} />
        </Routes>
      </BrowserRouter>
    <Analytics />
    <SpeedInsights />
    </>
  );
}

export default App;
