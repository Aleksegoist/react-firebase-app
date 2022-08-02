import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';

const App = () => {
  return (
    <div>
      <h1>
        <h1 className='text-center text-3xl font-bold'>Firebase Auth</h1>
      </h1>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
};

export default App;
