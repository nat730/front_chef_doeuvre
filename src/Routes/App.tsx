import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Connexion from "./Connexion";
import Accueil from "./Accueil";
import Inscription from "./Inscription";
import Page from "../components/Page";
import UserInfo from "./Profil";


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

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App;