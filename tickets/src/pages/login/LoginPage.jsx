import { Link } from "react-router-dom";
import style from "./LoginPage.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../components/context/userContext";

export const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { setIsLoggedIn, user, setUser, isLoggedIn, saveUserData } =
    useContext(UserContext);

  // Function til at slette userdata i localstorage og sætte isloggedIn til false
  const handleLogout = () => {
    localStorage.clear("user");
    setIsLoggedIn(false);
    setUser();
  };

  // Funktion der sender email og password til server og forsøger at logge ind.
  const handleLogin = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;

    if (!password) {
      setErrorMsg("Du skal udfylde password");
    }
    if (!email) {
      setErrorMsg("Du skal udfylde email");
    }
    if (!email && !password) {
      setErrorMsg("Du skal udfylde begge felter");
    }
    if (email && password) {
      setErrorMsg("");
      let url = `http://localhost:8081/sign-in`;
      let body = new URLSearchParams();
      body.append("username", email);
      body.append("password", password);
      let options = { body: body, method: "POST" };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => saveUserData(data));
    }
  };
  return (
    <section className={style.container}>
      <section className={style.form}>
        <h1>Log ind</h1>
        {!isLoggedIn ? (
          <section>
        <form
          onSubmit={(event) => {
            handleLogin(event);
          }}
        >
          <label>
            <p>Email:</p>
            <input type="email" name="email" />
          </label>
          <label>
            <p>Password:</p>
            <input
              type="password"
              name="password"
            />
          </label>
          <section>
            <button
              className={style.rightBtn}
              type="sumbit"
              
            >
              Log ind
            </button>
            <button className={style.leftBtn}>
              <Link className={style.link} to="/signup">
                Tilmeld
              </Link>
            </button>
          </section>
        </form>
        <b>{errorMsg}</b>
        </section>
        ) : (
          <section>
            <p>
              Velkommen {user.user.firstname} {user.user.lastname}
            </p>
            <button onClick={handleLogout}>Logout</button>
          </section>
        )}
      </section>
    </section>
  );
};
