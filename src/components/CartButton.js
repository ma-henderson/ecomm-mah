import React, { useContext } from 'react'
import AppContext from '../AppContext';

   
function CartButton(props) {
  const textStyle = {
    textAlign: "center"
  }

  [globalState, setGlobalState] = useContext(AppContext)

  const handleClick = () => {
    //Check if ITEM is in stock
    if (stockStatus) {
      //Check if ITEM is already in cart
      if (globalState.cart.find(product => product.id = props.item.id)) {
        // > TRUE > add qty to cart
        let tempQty = globalState.cart;
        tempQty += globalState.cart.id[qty]
        setGlobalState = {
          ...globalState,
          tempQty
        }
        setGlobalState()
      }

        setGlobalState(
          ...globalState,
          tempCart
        )

    } 
    
  }




// > FALSE> add entire item to cart with qty = 1

  let buttonStatus = {}

  const stockStatus = (stockStatus) => {
    return stockStatus ? 
      buttonStatus = {class: 'btn btn-success btn-sm', icon: 'fas fa-cart-arrow-down', text: '  Add to Cart!'}
      : 
      buttonStatus = {class: 'btn-secondary btn-sm disabled', icon: 'fa fas-shopping-cart', text: 'Not in stock'}
  }

  buttonStatus = stockStatus(props.item.inStock)

  return ( 
    <button onClick={handleClick} type="button" style={textStyle} className={buttonStatus.class}><i class={buttonStatus.icon}></i>{buttonStatus.text}</button>
  )
}
export default CartButton