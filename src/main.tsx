import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Connexion from "./Routes/Connexion";
import React from "react";
import ReactDOM from "react-dom/client";
import Acceuil from "./Routes/Accueil";
import Inscription from "./Routes/Inscription";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: '/inscription',
    element: <Inscription />
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
