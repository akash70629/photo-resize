import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="lfooter">

            <ul className="nav justify-content-center border-bottom pb-2 mb-0">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-dark">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Features" className="nav-link px-2 text-dark">Features</Link>
              </li>
              <li className="nav-item">
                <Link to="/Pricing" className="nav-link px-2 text-dark">Pricing</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="#" className="nav-link px-2 text-muted">FAQs</Link>
              </li> */}
              <li className="nav-item">
                <Link to="/About" className="nav-link px-2 text-dark">About</Link>
              </li>
            </ul>
            <p className="text-center text-dark mb-0">© 2024 Company, Inc</p>
        
      </div>
  )
}

export default Footer