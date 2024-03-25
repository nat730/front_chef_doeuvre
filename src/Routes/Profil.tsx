import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainMenu from "@/components/MainMenu/MainMenu";
import UserMenu from "@/components/UserMenu/UserMenu";
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
    const [user, setUser] = useState<User | null>(null);
    const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

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

    const toggleMainMenu = () => {
      setIsMainMenuOpen(!isMainMenuOpen);
    };

    const toggleUserMenu = () => {
      setIsUserMenuOpen(!isUserMenuOpen);
    };

    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="app">
          {isMainMenuOpen && <MainMenu toggleMainMenu={toggleMainMenu} />}
          {isUserMenuOpen && user && <UserMenu user={user.firstname} toggleUserMenu={toggleUserMenu} />}
          {user && <Header username={user.firstname} toggleMainMenu={toggleMainMenu} toggleUserMenu={toggleUserMenu} toggleCart={toggleCart}/>}
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
