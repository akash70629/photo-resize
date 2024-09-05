import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="footer">

            <ul className="nav justify-content-center border-bottom pb-3 mb-0">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-muted">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Features" className="nav-link px-2 text-muted">Features</Link>
              </li>
              <li className="nav-item">
                <Link to="/Pricing" className="nav-link px-2 text-muted">Pricing</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="#" className="nav-link px-2 text-muted">FAQs</Link>
              </li> */}
              <li className="nav-item">
                <Link to="/About" className="nav-link px-2 text-muted">About</Link>
              </li>
            </ul>
            <p className="text-center text-muted mb-3">© 2024 Company, Inc</p>
        
      </div>
  )
}

export default Footer