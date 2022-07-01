import React, {useState} from "react";
import "./SignInBody.css";
import { SIGN_IN_BODY_TEXT } from "../../constants/components";
import { SIGN_UP_BODY_TEXT } from "../../constants/components";

function SignInBody() {

  const [showSignInBox, setShowSignInBox] = useState(true);

  function setShowSignInBoxAs(param) {
    setShowSignInBox(param);
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
            <button>{SIGN_IN_BODY_TEXT.SIGN_IN}</button>
            <button>{SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER}</button>
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
            <p className="signinbody_title">{SIGN_UP_BODY_TEXT.SIGN_UP}</p>
            <input placeholder={SIGN_UP_BODY_TEXT.NAME} />
            <input placeholder={SIGN_UP_BODY_TEXT.EMAIL_PLACEHOLDER} />
            <input
              placeholder={SIGN_UP_BODY_TEXT.PASSWORD_PLACEHOLDER}
              type="password"
            />
            <button>{SIGN_UP_BODY_TEXT.SIGN_UP}</button>
            <button>{SIGN_UP_BODY_TEXT.LOGIN_AS_GUEST_USER}</button>
            <p className="signinbody_text">
              {SIGN_UP_BODY_TEXT.HAVE_AN_ACCOUNT}{" "}
              <span onClick={() => setShowSignInBoxAs(true)}>{SIGN_UP_BODY_TEXT.SIGN_IN_NOW}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SignInBody;