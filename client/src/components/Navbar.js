import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div>
            <Link to="/home">Home</Link>
        </div>
        <div>
            <Link to="/form">Form</Link>
        </div>
    </div>
  )
}

export default Navbar