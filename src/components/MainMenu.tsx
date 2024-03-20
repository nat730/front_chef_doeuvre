import { Home, List, MessageCircleQuestion, X } from "lucide-react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface MainMenuProps {
  toggleMainMenu: () => void;
}

const MainMenu = ({ toggleMainMenu }: MainMenuProps) => {

  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };

  const handleAboutClick = useCallback(
    () => {
      navigate('/about');
    }, [navigate])

  const handleConnexionClick = useCallback(
    () => {
      navigate('/connexion');
    }, [navigate]);

    const handleLogoutClick = useCallback(() => {
      localStorage.removeItem('token');
      fetch('http://localhost:3000/api/auth/local/logout')
      navigate('/');
    }, [navigate]);    

  return (
    <div className='main-menu'>
      <div className="left-main-menu">
        <div className="main-menu-top-container">
          <div className="main-menu-title-container">
            <p>Bienvenue sur</p>
            <h1 className="main-menu-title">Drive Solidaire</h1>
          </div>
        </div>
        <div className="main-menu-content">
          <div className="home-container" onClick={() => toggleMainMenu()}>
            <Home size={25} strokeWidth={2} className="home-icon" />
            <h2>Accueil</h2>
          </div>
          <div className="categories-container">
            <List size={25} strokeWidth={2} className="categories-icon" />
            <h2>Catégories</h2>
          </div>
          <div className="about-container" onClick={handleAboutClick}>
            <MessageCircleQuestion size={25} strokeWidth={2} className="about-icon" />
            <h2>Qui sommes-nous ?</h2>
          </div>
          <div className='connexion-container' onClick={isAuthenticated() ? handleLogoutClick : handleConnexionClick}>
            {isAuthenticated() ? <h2>Déconnexion</h2> : <h2>Connexion</h2>}
          </div>
        </div>
      </div>
      <div className="right-main-menu" onClick={() => toggleMainMenu()}>
        <div className='main-menu-close'>
          <X size={25} strokeWidth={2} className="close-main-menu" />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
