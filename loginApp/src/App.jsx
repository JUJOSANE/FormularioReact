import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Dashboard from './pages/dashboard.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react';

function App() {
  
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let handleLogin =()=>{
    setIsAuthenticated(true);
  }
  return (
    <>
      <Routes>
        <Route path='/login' element={ isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin}/>} />
        <Route path='/register' element={ isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
        <Route path='/dashboard' element={ isAuthenticated ? <Dashboard/> : <Navigate to="/login" />} />
        <Route path='*' element={ <Login onLogin={handleLogin} />} />
      </Routes>
    </>
  )
}

export default App





