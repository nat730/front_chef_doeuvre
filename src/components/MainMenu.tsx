import { X } from "lucide-react";

type MainMenuProps = {
  toggleMainMenu: () => void;
}

const MainMenu = ({toggleMainMenu}: MainMenuProps) => {

  return (
    <div className='main-menu'>
        <div className="main-menu-top-container">
          <div className='main-menu-close'>
            <X size={25} strokeWidth={2} className="close-main-menu" onClick={() => toggleMainMenu()}/>
          </div>
          <div className="main-menu-title-container">
            <h1 className="main-menu-title">Drive solidaire</h1>
          </div>
        </div>
        <div className="main-menu-content">
          <h1>Accueil</h1>
          <h1>Produits</h1>
          <h1>Catégories</h1>
          <h1>Connexion</h1>
        </div>
      </div>
  );
};

export default MainMenu;
