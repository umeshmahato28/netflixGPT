import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG, USER_AVATAR } from "../utils/constants";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/network-request-failed") {
          setErrorMessage("Network error: Please check your connection and try again.");
        } else {
          setErrorMessage(errorMessage);
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-gradient-to-t from-black">
        <img className="w-screen h-screen object-cover"
          src={LOGIN_BG}
          alt="login-bg"
        />
        {/* <img className="h-screen w-screen " src={LOGIN_MOBILE_BG} alt="BG" /> */}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black bg-opacity-70 rounded-lg md:w-3/12 my-36 mx-auto right-0 left-0 text-white "
      >
        <h1 className="font-bold text-3xl py-4">Sign Up</h1>
        <input
          ref={name}
          type="text"
          placeholder="Name"
          className="p-4 my-2 w-full bg-gray-700/50 rounded-lg"
        />
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
          Register
        </button>
        <p className="py-4">
          Already Registered? <Link to="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
