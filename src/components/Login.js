import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG } from "../utils/constants";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // Sign In Logic
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover "
          src={LOGIN_BG}
          alt="BG"
        />
        {/* <img className="h-screen w-screen md:hidden" src={LOGIN_MOBILE_BG} alt="BG" /> */}
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700/50 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700/50 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 my-4 rounded-md bg-red-600 w-full"
          onClick={handleButtonClick}
        >
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={handleButtonClick}>
          New to Netflix? <Link className="hover:underline" to="/signup">Sign Up Now</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
