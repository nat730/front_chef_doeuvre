import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainMenu from "@/components/MainMenu";
import UserMenu from "@/components/UserMenu";
import { useEffect, useState } from "react";

interface User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    address: string;
}

const UserInfo = () => {
    const [user, setUser] = useState<User|null>(null);
    const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
    const toggleMainMenu = () => {
      setIsMainMenuOpen(!isMainMenuOpen);
    };
  
    const toggleUserMenu = () => {
      setIsUserMenuOpen(!isUserMenuOpen);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/auth/local/user/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    }
                });
                const data = await response.json();
                if (data) {
                    setUser(data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="app">
          {isMainMenuOpen && <MainMenu toggleMainMenu={toggleMainMenu} />}
          {isUserMenuOpen && <UserMenu user={user} toggleUserMenu={toggleUserMenu} />}
          <Header username={user} toggleMainMenu={toggleMainMenu} toggleUserMenu={toggleUserMenu} />
          <form onSubmit={handleSubmit}>
            <h2>INFORMATIONS</h2>
            <label htmlFor="pseudo">Nom : </label>
            <input type="text" id="nom" value={user?.firstname} disabled />
            <br />
            <label htmlFor="prenom">Prénom : </label>
            <input type="text" id="prenom" value={user?.lastname} disabled />
            <br />
            <label htmlFor="email">email : </label>
            <input type="text" id="email" value={user?.email} disabled />
            <br />
            <label htmlFor="phone">phone : </label>
            <input type="text" id="phone" value={user?.phone} disabled />
            <br />
            <label htmlFor="address">addresse : </label>
            <input type="text" id="address" value={user?.address} disabled />
            <br />
          </form>
          <Footer />
        </div>
      );
    };
    
export default UserInfo;
