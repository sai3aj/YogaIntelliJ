import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Home.css'

export default function Home() {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>YogaIntelliJ</h1>
                <div className="header-buttons">
                    {user ? (
                        <>
                            <Link to='/profile'>
                                <button 
                                    className="btn btn-secondary" 
                                    id="profile-btn"
                                >
                                    Profile
                                </button>
                            </Link>
                            <button 
                                className="btn btn-secondary" 
                                onClick={signOut}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>
                                <button 
                                    className="btn btn-secondary" 
                                    id="login-btn"
                                >
                                    Login
                                </button>
                            </Link>
                            <Link to='/register'>
                                <button 
                                    className="btn btn-secondary" 
                                    id="register-btn"
                                >
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <h1 className="description">A Yoga AI Trainer</h1>
            <div className="home-main">
                <div className="btn-section">
                    {user ? (
                        <>
                            <Link to='/start'>
                                <button className="btn start-btn">Let's Start</button>
                            </Link>
                            <Link to='/tutorials'>
                                <button className="btn start-btn">Tutorials</button>
                            </Link>
                        </>
                    ) : (
                        <p className="auth-message">Please login or register to access yoga features</p>
                    )}
                </div>
            </div>
        </div>
    )
}
