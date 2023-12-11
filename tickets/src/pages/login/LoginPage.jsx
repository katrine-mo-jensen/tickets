import { Link } from "react-router-dom";
import style from "./LoginPage.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../components/context/userContext";
import { InputField } from "../../components/InputField";

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
      let options = {
        body: body,
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/plain",
          mode: "no-cors",
        },
      };
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
            <h1>
              Velkommen {user.users.name} 
            </h1>
            <p>{user.users.name}</p>
            <p>Email: {user.users.email}</p>
            <p>Tlf: {user.users.phone}</p>
            <button onClick={handleLogout}>Logout</button>
            <button> <Link to="/booking">Dine Events</Link></button>
          </section>
        )}
      </section>
    </section>
  );
};
