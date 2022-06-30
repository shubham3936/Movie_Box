import React from "react";
import "./SignInBody.css";

function SignInBody() {
  // title
  //         input
  //         input
  //         button
  //         button
  //         text
  return (
    <div className="signinbody_container">
      <div className="signinbody_form">
          <p className="signinbody_title">Sign In</p>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button>Sign In</button>
          <button>Login as Guest User</button>
          <p className="signinbody_text">New to MovieApp? <span>SignUp Now.</span></p>
      </div>
    </div>
  );
}

export default SignInBody;