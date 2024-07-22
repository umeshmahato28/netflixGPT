import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import MoviePage from "./MoviePage";
import Error from "./Error";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/browse/:movieId",
      element: <MoviePage />
  },
  {
      path: '*',
      element: <Error />
  }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
