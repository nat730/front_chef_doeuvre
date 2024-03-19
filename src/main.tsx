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
import UserInfo from "./Routes/Profil";


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
  },
  {
    path: '/user',
    element: <Page protectedPage={true} Content={UserInfo} />
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
