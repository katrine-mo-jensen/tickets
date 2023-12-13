import { Link } from "react-router-dom";
import style from "./LoginPage.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../components/context/userContext";
import { InputField } from "../../components/input/InputField";

export const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { setIsLoggedIn, user, setUser, isLoggedIn, saveUserData } =
    useContext(UserContext);

  const handleLogout = () => {
    localStorage.clear("user");
    setIsLoggedIn(false);
    setUser();
  };

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
      body.append("email", email);
      body.append("password", password);
      let options = {
        body: body,
        method: "POST",
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          console.log("Data from signup:", data);
          saveUserData(data);
        });
    }
  };
  return (
    <section className={style.container}>
      <section className={style.form}>
        {!isLoggedIn ? (
          <section>
            <h1>Log ind</h1>
            <form
              onSubmit={(event) => {
                handleLogin(event);
              }}
            >
              <InputField
                name="email"
                placeholder="Please enter your email"
                type="email"
              />
              <InputField
                name="password"
                placeholder="Please enter your password"
                type="password"
              />
              <section>
                <button className={style.rightBtn} type="sumbit">
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
            <section className={style.neck}>
              <h1>Velkommen {user.name}</h1>
              <h2>Dine informationer</h2>
              <p>{user.name}</p>
              <p>Email: {user.email}</p>
              <p>Tlf: {user.phone}</p>
              <section>
                <button className={style.rightBtn}>
                  <Link className={style.link} to="/overview">
                    Dine events
                  </Link>
                </button>
                <button className={style.leftBtn} onClick={handleLogout}>
                  Logout
                </button>
              </section>
            </section>
          </section>
        )}
      </section>
    </section>
  );
};
