import React from 'react'
import { Navigate } from 'react-router-dom'

const Admin = () => {
  if (localStorage.getItem('token')) {
    return (
        <div>
          <h1>Admin Page</h1>
        </div>
      )
  }

  return Navigate(-1)
  
}

export default Admin
