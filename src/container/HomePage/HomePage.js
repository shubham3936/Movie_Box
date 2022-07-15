import React from 'react'
import HomePageContent from '../../components/HomePageContent/HomePageContent'
import "./HomePage.css"
import Navbar from '../../components/Navbar/Navbar';


function HomePage({ setProductId, isUserLoggedIn, setIsUserLoggedIn }) {
  return (
    <div>
        <Navbar 
          showSignInButton={false} 
          showInputField={true}
          isUserLoggedIn={isUserLoggedIn}
          setIsUserLoggedIn={setIsUserLoggedIn}
          />
        <HomePageContent setProductId={setProductId}/>
    </div>
  );
}

export default HomePage;