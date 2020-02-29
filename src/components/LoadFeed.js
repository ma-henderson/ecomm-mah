import React, { useState } from 'react';
import LikeCard from './LikeCard';

const LoadFeed = () => {

  const [state, setState] = useState({feed: []})

  const handleClick = () => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}feed/all`)
      .then(res=>res.json())
      .then(json => {
        setState({
          ...state,
          feed: json
        })
      })
    }

    if (state.feed.length === 0) {
      return(
      <button onClick={handleClick} className="btn btn-primary">CLICK ME</button>
      )
    } else {
      return(
      <div>
        {state.feed.map(item =>
        <LikeCard 
          description={item.description}
          title={item.title}
        />                        
        )}
      </div>
      
      )
    }
}
export default LoadFeed