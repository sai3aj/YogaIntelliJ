import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'
import Tutorials from './pages/Tutorials/Tutorials'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Profile from './pages/Profile/Profile'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route 
            path='/start' 
            element={
              <ProtectedRoute>
                <Yoga />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/tutorials' 
            element={
              <ProtectedRoute>
                <Tutorials />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/profile' 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}


