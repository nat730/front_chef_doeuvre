import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Connexion from "./Routes/Connexion";
import React from "react";
import ReactDOM from "react-dom/client";
import Accueil from "./Routes/Accueil";
import Inscription from "./Routes/Inscription";
import Page from "./components/Page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Page protectedPage={false} Content={Accueil} />,
  },
  {
    path: "/connexion",
    element: <Page protectedPage={false} Content={Connexion} />,
  },
  {
    path: '/inscription',
    element: <Page protectedPage={false} Content={Inscription} />
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
