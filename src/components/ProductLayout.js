import React from 'react'


const ProductLayout = (props) => {
  const style = {
    marginLeft: "0px",
    marginRight: "0px"
  }
  
  return(
    <div className="card-deck" style={style}>
      {props.children}
    </div>
  )
}
export default ProductLayout