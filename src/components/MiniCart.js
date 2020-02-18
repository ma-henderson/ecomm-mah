import React, {useContext} from 'react';
import AppContext from '../AppContext';

const MiniCart = (props) => {
  [globalState, setGlobalState] = useContext(AppContext)

  let cartContents = {}
  return(
  <div>
  {cartContents}<i className="fa fas-shopping-cart"></i>
  </div>
)
}
export default MiniCart