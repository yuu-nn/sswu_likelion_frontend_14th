import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Button from './compoents/Button'
import Write from './compoents/Write'
import "../src/assets/style.scss"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Button />}/>
      <Route path='/write' element={<Write/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
