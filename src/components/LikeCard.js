import React from 'react'

const LikeCard = (props) => {
  return(
    <div class="card" style={{width: "18rem"}}>
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.title ? props.title : "No Title"}</h5>
        <p class="card-text">{props.description}</p>
        <button class="btn btn-dark">Like me</button>
      </div>
    </div>
  )
}
export default LikeCard