import React from 'react'
import ProductCard from './ProductCard';

const ProductLayout = (props) => {
  const style = {
    marginLeft: "0px",
    marginRight: "0px"
  }
  
// add function for media queries
let cardQty = [1, 2, 3, 4]

const cardsPerLine = (qty) => {
  for (let i = 0; i < qty; i++) {
    return <ProductCard id={(i+1).toString()}/>
  }
}

const cardsPerDiv = cardQty.map((number) => <ProductCard id={number} />)

  return(
    <div className="card-deck" style={style}>
      {cardsPerDiv}
    </div>
  )
}
export default ProductLayout