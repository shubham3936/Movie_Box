import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SignInBody from '../../components/SignInBody/SignInBody'

function SignIn({setIsUserLoggedIn}) {
  return (
    <div>
        <Navbar showSignInButton={false} />
        <SignInBody setIsUserLoggedIn={setIsUserLoggedIn} />

    </div>
  )
}

export default SignIn ;