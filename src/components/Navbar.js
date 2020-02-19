import React, { useContext } from 'react'
import Logo_transparent from '../img/logo_transparent.png'
import ButtonBar from './ButtonBar'
import AppContext from '../AppContext'
import MiniCart from './MiniCart'


const Navbar = (prop) => {
  const logoStyle = {
    height: "120px",
    top: "20px",
    position: "relative",
    transform: "rotate(-20deg)"

    }
  
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
      <ButtonBar />
      </div>
    <div class="mx-auto my-2 order-0 order-md-1 position-relative">
        <a class="mx-auto" href="#">
            <img src={Logo_transparent} class="" style={logoStyle}/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul class="navbar-nav mr-auto text-center">
            <li class="nav-item" style={{marginLeft:"20px"}}>
                <a class="nav-link" href="#">Log in</a>
            </li>
            <li class="nav-item">
               <MiniCart />
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </div>
</nav>
  )
}
export default Navbar