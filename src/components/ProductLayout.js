import React from 'react'


const ProductLayout = (props) => {
  return(
    <div className="card-deck">
      {props.children}
    </div>
  )
}
export default ProductLayout