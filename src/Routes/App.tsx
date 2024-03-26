import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Connexion from "./Connexion";
import Accueil from "./Accueil";
import Inscription from "./Inscription";
import Page from "../components/Page";
import UserInfo from "./Profil";
import Header from "@/components/Header/Header";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Page protectedPage={false} Content={Accueil} />,
//   },
//   {
//     path: "/connexion",
//     element: <Page protectedPage={false} Content={Connexion} />,
//   },
//   {
//     path: '/inscription',
//     element: <Page protectedPage={false} Content={Inscription} />
//   },
//   {
//     path: '/user',
//     element: <Page protectedPage={true} Content={UserInfo} />
//   }
// ]);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Page protectedPage={false} Content={Accueil} />} />
        <Route path="/connexion" element={<Page protectedPage={false} Content={Connexion} />} />
        <Route path="/inscription" element={<Page protectedPage={false} Content={Inscription} />} />
        <Route path="/user" element={<Page protectedPage={true} Content={UserInfo} />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
