import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
  
    const [globalState, setGlobalState] = useContext(AppContext);

    const logHandler = () => {
      const temp = globalState.loggedIn

        setGlobalState({
          ...globalState,
          loggedIn: !temp
        })
    }

  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
      <ButtonBar />
      </div>
    <div class="mx-auto my-2 order-0 order-md-1 position-relative">
        <Link class="mx-auto" to="/">
            <img src={Logo_transparent} class="" style={logoStyle}/>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul class="navbar-nav mr-auto text-center">
            <li class="nav-item" style={{marginLeft:"20px"}}>
                <button onClick={logHandler} className="btn btn-primary">{globalState.loggedIn ? 'Log Out' : 'Log in'}</button>
            </li>
            <li class="nav-item">
               <MiniCart />
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/About">About us</Link>
            </li>
        </ul>
    </div>
</nav>
  )
}
export default Navbar