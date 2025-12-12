import Header from "./Header"
import { useRef, useState } from 'react'
import { checkValidate } from "../utils/validate"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
        const handleButtonClick = () => {
            //validate the form data
            // console.log(email.current.value);
            // console.log(password.current.value);
            const message = checkValidate(email.current.value,password.current.value);
            setErrorMessage(message);
            if(message) return;

            if(!isSignInForm){
                //signup logic
                createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
           // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                 displayName: name.current.value,
                 photoURL: "https://example.com/jane-q-user/profile.jpg"
                 })
                    .then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                            dispatch(addUser({uid:uid,email:email,displayName:displayName,photouRL:photoURL}));
                        navigate("/browse");
                    // Profile updated!
                        })
                        .catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
         });
            }
            else{
                //signin logic
                signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
    
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
    });
            }
        };
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
        <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="text-3xl font-bold mb-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-3 my-4 w-full bg-gray-700 rounded-md"/>}
            <input ref={email} type="text" placeholder="Email or mobile number" className="p-3 my-4 w-full bg-gray-700 rounded-md"/>
            <input ref={password} type="password" placeholder="Password" className="p-3 my-4 w-full bg-gray-700 rounded-md"/>
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
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