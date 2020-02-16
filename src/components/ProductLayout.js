import React from 'react'
import ProductCard from './ProductCard';

const ProductLayout = (props) => {
  const style = {
    marginLeft: "0px",
    marginRight: "0px",
    marginBottom: "16px"
  }
  


let cardQty = [1, 2, 3, 4, 5]

// for below function with reqres.in, use the id themselves as id's AKA only change id={product.id}
const cardsPerDiv = cardQty.map((number) => <ProductCard id={number} />)

  return(
    <div className="card-deck" style={style}>
      <div class="row">
        {cardsPerDiv}
      </div>
    </div>
  )
}
export default ProductLayout