import React, { useContext } from 'react'
import TopJumbotron from '../components/TopJumbotron';
import ProductLayout from '../components/ProductLayout';
import AppContext from '../AppContext'
import FeedForm from '../components/FeedForm';
import LoadFeed from '../components/LoadFeed';

const Home = () => {

  const [globalState, setGlobalState] = useContext(AppContext)

  

  return(
    <div>
    {console.log(process.env.REACT_APP_BACKEND_URL)}
      <TopJumbotron />
      {/* <ProductLayout/> */}
      <FeedForm/>
      <LoadFeed/>
    </div>
  )
}
export default Home