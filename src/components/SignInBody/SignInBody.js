import React, { useState } from "react";
import "./SignInBody.css";
import { SIGN_IN_BODY_TEXT } from "../../constants/components";
import Button from "../../global/Button/Button";
import { Navigate } from "react-router-dom";

function SignInBody() {
  const [showSignInBox, setShowSignInBox] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function setShowSignInBoxAs(param) {
    setShowSignInBox(param);
  }

  function signUp() {
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);

    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((data) => {
    //     console.log(data);
    //     setUsUserLoggedIn(true);
    //     Navigate("/");
    //   })
    //   .catch((err) => console.log(err));
  }

  return (
    <>
      {showSignInBox ? (
        // SignIn Box
        <div className="signinbody_container">
          <div className="signinbody_form">
            <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_IN}</p>
            <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} />
            <input
              placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER}
              type="password"
            />
            <Button text={SIGN_IN_BODY_TEXT.SIGN_IN} />
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
            <input placeholder="Name" />
            <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} />
            <input
              placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER}
              type="password"
            />
            <Button text={SIGN_IN_BODY_TEXT.SIGN_UP} />
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
