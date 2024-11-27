import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from './Components/Main';
import TestPage from './Components/Test';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Main/>} />
      <Route exact path='/test' element={<TestPage/>} />
    </Routes>
  )
}

export default App;