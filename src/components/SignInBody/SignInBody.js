import React, { useState } from "react";
import "./SignInBody.css";
import { SIGN_IN_BODY_TEXT } from "../../constants/components";
import Button from "../../global/Button/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function SignInBody({setIsUserLoggedIn}) {
  const [showSignInBox, setShowSignInBox] = useState(true);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function setShowSignInBoxAs(param) {
    setShowSignInBox(param);
  }

  function signUp() {
    if(name === "" || email ==="" || password === "")
    {
      alert( "Name, email or Password cannot be EMPTY.");
      return ;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
        setIsUserLoggedIn(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  function signIn() {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Successfully logged in!");
        setIsUserLoggedIn(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }


  return (
    <>
      {showSignInBox ? (
        // SignIn Box
        <div className="signinbody_container">
          <div className="signinbody_form">
            <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_IN}</p>
            <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER}
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button text={SIGN_IN_BODY_TEXT.SIGN_IN} onClicking={signIn}/>
            <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
            <p className="signinbody_text">
              {SIGN_IN_BODY_TEXT.NEW_TO_MOVIE_APP}{" "}
              <span onClick={() => setShowSignInBoxAs(false)}>
                {SIGN_IN_BODY_TEXT.SIGN_UP_NOW}
              </span>
            </p>
          </div>
        </div>
      ) : (
        // SignUp Box
        <div className="signinbody_container">
          <div className="signinbody_form">
            <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_UP}</p>
            <input 
              placeholder="Name"
              value={name} 
              onChange={e => setName(e.target.value)} />
            <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} 
              value={email} 
              onChange={e => setEmail(e.target.value)} />
            <input
              placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER}
              type="password"
              value={password}
              onChange={e =>  setPassword(e.target.value)}
            />
            <Button onClicking={signUp} text={SIGN_IN_BODY_TEXT.SIGN_UP} />
            <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
            <p className="signinbody_text">
              {SIGN_IN_BODY_TEXT.HAVE_AN_ACCOUNT}{" "}
              <span onClick={() => setShowSignInBoxAs(true)}>
                {SIGN_IN_BODY_TEXT.SIGN_IN_NOW}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SignInBody;
