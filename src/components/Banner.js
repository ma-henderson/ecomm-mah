import React from 'react'
import bannerImg from '../img/banner-1.jpg'

const Banner = () => {
  
  const Styles = styled.div`
    .jumbotron{
      background: url(${bannerImg}) no-repeat fixed bottom;
      background-size: cover;
      color: #ccc;
      height: 200px;
      position: relative;
      z-index: -2;
    }

    .overlay{
      background-color: #000;
      opacity: '0.6';
      positon: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  `


  return(
    <div className="jumbotron jumbotron-fluid">
      <div className="overlay"></div>
      <div className="container">
        <h1 className="display-4">Ring Ring!</h1>
        <p className="lead">From new releases to pre-owned, we have what you want</p>
      </div>
    </div>
    )
}
export default Banner