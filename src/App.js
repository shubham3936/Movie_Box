
import {useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";
import SignIn from "./container/SignIn/SignIn";
import HomePage from "./container/HomePage/HomePage";

function App() {

  const [user,setUser] = useState(true);


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <LandingPage />} />
          <Route path="/signin" element={<SignIn />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;