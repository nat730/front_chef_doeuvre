import Footer from "@/components/Footer/Footer";
import { useUserStore } from "@/store/Zustand";

const UserInfo = () => {

  const { user } = useUserStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  };

  return (
      <div className="app">
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
