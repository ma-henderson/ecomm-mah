import React from 'react'
import Logo_transparent from '../img/logo_transparent.png'

const Navbar = (prop) => {
  return(
  <div className="navbar-bootstrap">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img className="navbar-logo" src={Logo_transparent}/>
      <a className="navbar-brand" href="#">BuZzz-store.com</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0 sticky-top">
          <input className="form-control mr-sm-2" type="search" placeholder="Quality Phones . . ." aria-label="Search"/>
          <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown float-right">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-circle"></i>
            </a>
            <div className="dropdown-menu align-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Log in</a>
              <a className="dropdown-item" href="#">Create Account</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Contact us</a>
            </div>
          </li>
          <li className="nav-item dropdown float-right">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-shopping-cart"></i>
            </a>
            <div className="dropdown-menu align-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Open cart</a>
              <a className="dropdown-item" href="#">Checkout</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Save for later</a>
            </div>
          </li>
        </ul>

      </div>
    </nav>

  </div>
  )
}
export default Navbar