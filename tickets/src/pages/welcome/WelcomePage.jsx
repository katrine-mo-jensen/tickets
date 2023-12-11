import { useContext,  } from "react";
import { UserContext } from "../../components/context/userContext";
import style from "../welcome/WelcomePage.module.scss";
import { Link } from "react-router-dom";


export const WelcomePage = () => {
  
  const { setIsLoggedIn, user, setUser, isLoggedIn, saveUserData } =
    useContext(UserContext);

  const handleLogout = () => {
    localStorage.clear("user");
    setIsLoggedIn(false);
    setUser();
  };
  return (
    <section className={style.back}>
      {user ? (
        <section className={style.neck}>
          <h1>Velkommen {user.name}</h1>
          <h2>Dine informationer</h2>
          <p>{user.name}</p>
          <p>Email: {user.email}</p>
          <p>Tlf: {user.phone}</p>
          <section>
            <button className={style.rightBtn}>
              <Link className={style.link} to="/booking">
                Dine events
              </Link>
            </button>
            <button className={style.leftBtn} onClick={handleLogout}>
              Logout
            </button>
          </section>
        </section>
      ) : (
        <p>Du er ikke logget ind</p>
      )}
    </section>
  );
};
