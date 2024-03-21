import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <Router>
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/movie/:id' element={<MovieDetail />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App