import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import SingleMovie from './SingleMovie'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
      </Routes>
    </div>
  )
}

export default App