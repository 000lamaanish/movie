import React from 'react'
import "./css/App.css"
// import Moviecard from "./component/moviecard"
import Homepage from './pages/homepage'
import Favourite from './pages/fav'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    // <div>
    //   <Homepage />
    // </div>
    <main className='main'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fav" element={<Favourite />} />
      </Routes>
    </main>
  )
}

export default App
