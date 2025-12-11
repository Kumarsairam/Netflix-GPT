import Header from "./Header"
import { useState } from 'react'

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg"
        alt="backgroundimage"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="text-3xl font-bold mb-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-3 my-4 w-full bg-gray-700 rounded-md"/>}
            <input type="text" placeholder="Email or mobile number" className="p-3 my-4 w-full bg-gray-700 rounded-md"/>
            <input type="password" placeholder="Password" className="p-3 my-4 w-full bg-gray-700 rounded-md"/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>
                {isSignInForm ? "New to Netflix?Sign up now." : "Already registered? Sign In Now."}
            </p>
        </form>
    </div>
  )
}

export default Login