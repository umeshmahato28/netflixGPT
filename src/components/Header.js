import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import showGptSearch from "../utils/gptSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        const currentPath = window.location.pathname;
        if (currentPath !== "/signup") {
          navigate("/");
        }
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    // toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-full px-6 bg-gradient-to-b from-black z-20 flex items-center flex-col md:flex-row md:justify-between">
      <img className="md:w-48 pt-4 w-28 " src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center  sm:gap-x-2 lg:gap-0">
          <button
            className="py-2 px-4 text-white bg-purple-800 rounded-md mx-4"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "GPT Search" : "Home"}
          </button>

          <button
            className="px-4 py-2 bg-red-700 text-white font-semibold rounded-md"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
