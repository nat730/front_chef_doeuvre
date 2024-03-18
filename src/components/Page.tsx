import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IPageProps {
  protectedPage: boolean;
  Content: React.FC
}

const Page = ({protectedPage, Content}: IPageProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/local/user/me', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
          }
        })
        const data = await response.json();
        console.log('data', data);
        if (data.error) {
          localStorage.removeItem('token');
          navigate('/connexion');
        }
      } catch (error) {
        console.log('error', error);
      }
    }
    getUserInfo();
  }, [protectedPage, navigate])

  return (
    <div className={"route" + protectedPage ? " protected-route" : ""}>
      <Content />
    </div>
  )
}

export default Page
