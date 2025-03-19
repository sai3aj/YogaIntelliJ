import React, { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import './Profile.css'

export default function Profile() {
  const { user, signOut } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [displayName, setDisplayName] = useState('')

  useEffect(() => {
    // Initialize display name from user metadata or email
    setDisplayName(user?.user_metadata?.name || user?.email?.split('@')[0] || '')
  }, [user])

  const handleSaveProfile = () => {
    // Here you would save the profile data to Supabase
    // For now, we'll just toggle editing mode
    setIsEditing(false)
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Your Profile</h1>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          {user?.email?.charAt(0).toUpperCase() || 'U'}
        </div>
        
        <div className="profile-info">
          <div className="profile-field">
            <label>Email</label>
            <span>{user?.email}</span>
          </div>
          
          <div className="profile-field">
            <label>Display Name</label>
            {isEditing ? (
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            ) : (
              <span>{displayName}</span>
            )}
          </div>
          
          {isEditing ? (
            <button className="save-button" onClick={handleSaveProfile}>
              Save Profile
            </button>
          ) : (
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="account-settings">
        <h2>Account Settings</h2>
        <button className="logout-button" onClick={signOut}>Logout</button>
      </div>
    </div>
  )
} 