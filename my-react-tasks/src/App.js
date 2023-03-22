
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFoundPage from './views/NotFoundPage/NotFoundPage';

 
function App() {
  return (
    <div>

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFoundPage/>} />
         </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App


