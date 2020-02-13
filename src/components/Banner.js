import React from 'react'
import bannerImg from '../img/banner-1.jpg'

const Banner = () => {
  const bannerStyle = {
    width: "100%",
    height: "50vh",
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
  }  
  const textStyle = {
    float: "right",
    padding: "22vh 10vh"
  }

  
  return(
      <section className="banner" style={ bannerStyle }>
        <h4 style={textStyle}>Get the phone that's right for you</h4>
      </section>
    )
}
export default Banner