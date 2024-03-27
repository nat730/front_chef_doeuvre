import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Connexion from "./Connexion";
import Accueil from "./Accueil";
import Inscription from "./Inscription";
import Page from "../components/Page";
import UserInfo from "./Profil";
import InvoicePage from "./invoice";
import CartValidation from "./CartValidation";
import Delivery from "./Delivery";


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
  },
  {
    path: '/cart',
    element: <Page protectedPage={false} Content={CartValidation} />
  },
  {
    path: '/delivery',
    element: <Page protectedPage={true} Content={Delivery} />
  },
  {
    path: '/invoice/:id',
    element: <Page protectedPage={true} Content={InvoicePage} />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
