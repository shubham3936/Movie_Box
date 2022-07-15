
import {useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";
import SignIn from "./container/SignIn/SignIn";
import HomePage from "./container/HomePage/HomePage";

function App() {

  // const [user,setUser] = useState(true);
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false);
  const [productId, setProductId] = useState(0);


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element = {
              isUserLoggedIn? (
                <HomePage
                  setProductId={setProductId}
                  isUserLoggedIn={isUserLoggedIn}
                  setIsUserLoggedIn={setIsUserLoggedIn}
                />
              ):(<LandingPage/>)
            }
          />
          <Route path="/sign-in" 
            element={<SignIn setIsUserLoggedIn={setIsUserLoggedIn}/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;