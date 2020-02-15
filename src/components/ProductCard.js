import React from 'react'
import PhonePic from '../img/iphone11.jpg'

const ProductCard = (props) => {
  
const state =
    {image: PhonePic, title: "iPhone 11", text: "Sexiness emobdied, price unjustified, be a Jobbs-o-holic!", stock: true}

function inStock(stockBoolean) {
return (stockBoolean) ? "IN STOCK NOW" : "Out of stock"
}

  return(
    <div class="card">
      <img src={PhonePic} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{state.title}</h5>
        <p class="card-text">{state.text}</p>
        <p class="card-text"><small class="text-muted">{inStock(state.stock)}</small></p>
      </div>
    </div>
  )
}
export default ProductCard