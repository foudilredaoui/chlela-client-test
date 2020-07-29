import React from 'react'
import logo from '../assets/logo.png'
function Navbar() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand" href="/">
                <img src={logo} width="50" height="50"></img>
                Chlela Test</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className="collapse navbar-collapse" id="navbarNav">
              
            </div> */}
          </nav>
        </div>
    )
}

export default Navbar
