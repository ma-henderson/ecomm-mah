import React from 'react'
import PhonePic from '../img/iphone11.jpg'
import PhonePic2 from '../img/iphone11-gold.png'


const ProductCard = (props) => {
  
const state =
    {image: PhonePic, title: "iPhone 11", text: "Sexiness embodied, price unjustified, be a Jobbs-o-holic!", stock: true}

function inStock(stockBoolean) {
return (stockBoolean) ? "IN STOCK NOW" : "Out of stock"
}

  return(
    <div class="card">
      {/* image carousel */}
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"  data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={PhonePic} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={PhonePic2} class="d-block w-100" alt="..."/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" style={{outline: "black"}} aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title">{state.title}</h5>
      <p class="card-text">{state.text}</p>
      <p class="card-text"><small class="text-muted">{inStock(state.stock)}</small></p>
    </div>
  </div>

    



  )
}
export default ProductCard