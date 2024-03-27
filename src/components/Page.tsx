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
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (protectedPage && !token) {
      navigate('/connexion');
      return;
    }

    const getUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/local/user/me', {
          headers: {
            'Authorization': 'Bearer ' + token,
          }
        })
        const data = await response.json();
        setUser(data.user.firstname)

        if (data.error) {
          localStorage.removeItem('token');
          navigate('/connexion');
        }
      } catch (error) {
        localStorage.removeItem('token');
      }
    }

    if (protectedPage && token) {
      getUserInfo();
    }
  }, [protectedPage]);

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
