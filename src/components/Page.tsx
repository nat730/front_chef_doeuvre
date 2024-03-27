import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";
import Header from "./Header/Header";
import { useCartMenuStore, useMainMenuStore, useUserMenuStore, useUserStore } from "@/store/Zustand";
import UserMenu from "./UserMenu/UserMenu";
import Cart from "./Cart/Cart";

interface IPageProps {
  protectedPage: boolean;
  Content: React.FC
}

const Page = ({protectedPage, Content}: IPageProps) => {
  const navigate = useNavigate();
  const { isMainMenuOpen } = useMainMenuStore();
  const { isUserMenuOpen } = useUserMenuStore();
  const { isCartMenuOpen } = useCartMenuStore();
  const { setUser } = useUserStore();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('init Page', protectedPage, token);


    if (protectedPage && !token) {
      navigate('/connexion');
      return;
    }

    const getUserInfo = async () => {
      console.log('token before user me route', token);

      try {
        const response = await fetch('http://localhost:3000/api/auth/local/user/me', {
          headers: {
            'Authorization': 'Bearer ' + token,
          }
        })
        const data = await response.json();
        console.log('user connected', data)

        if (data.error && protectedPage) {
          localStorage.removeItem('token');
          navigate('/connexion');
        }
        else {
          setUser(data)
        }
      } catch (error) {
        localStorage.removeItem('token');
      }
    }

    if (token) {
      getUserInfo();
    }
  }, []);

  return (
    <div className={"route" + (protectedPage ? " protected-route" : "")}>
      <Header />
      {isMainMenuOpen && <MainMenu />}
      {isUserMenuOpen && <UserMenu />}
      {isCartMenuOpen && <Cart />}
      <Content />
    </div>
  )
}

export default Page
