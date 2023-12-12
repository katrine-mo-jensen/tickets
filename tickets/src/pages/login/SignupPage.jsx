import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./LoginPage.module.scss";
import { InputField } from "../../components/InputField";

export const SignupPage = () => {
  const [error, setError] = useState("");

  // Submit funktion der opretter en ny bruger i backenden
  const handleSubmit = (event) => {
    event.preventDefault();

    // gemmer alle values is scoped variabler
    let name = event.target.name.value;
    let phone = event.target.phone.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    // tjekker om variabler er sat
    if (name && email && password && phone) {
      let url = `http://localhost:8081/sign-up`;

      // laver en ny body og tilføjer alle variabler
      let body = new URLSearchParams();
      body.append("name", name);
      body.append("email", email);
      body.append("password", password);
      body.append("phone", phone);

      const options = {
        body: body,
        method: "POST",
      };

      // poster dem til serveren
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      setError("Udfyld venligst alle felter");
    }
  };

  return (
    <section className={style.container}>
      <section className={style.form}>
        <h1>Tilmeld</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <InputField type="text" name="name" placeholder="Enter your name" />
          <InputField
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <InputField
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />

          <section>
            <button className={style.rightBtn} type="sumbit">
              Opret
            </button>
            <button className={style.leftBtn}>
              <Link className={style.link} to="/login">
                Login
              </Link>
            </button>
          </section>
          <b>{error}</b>
        </form>
      </section>
    </section>
  );
};
