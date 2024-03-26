import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";

interface IPageProps {
  protectedPage: boolean;
  Content: React.FC
}

const Page = ({protectedPage, Content}: IPageProps) => {
  const navigate = useNavigate();

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
      <MainMenu />

      <Content />
    </div>
  )
}

export default Page
