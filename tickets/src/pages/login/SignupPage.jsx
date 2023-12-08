import { Link } from "react-router-dom";
import style from "./LoginPage.module.scss";

export const SignupPage = () => {
  return (
    <section className={style.container}>
      <section className={style.form}>
        <h1>Tilmeld</h1>
        <form>
          <label>
            <p>Navn:</p>
            <input type="text" />
          </label>
          <label>
            <p>Email:</p>
            <input type="email" />
          </label>
          <label>
            <p>Password:</p>
            <input type="password" />
          </label>
          <label>
            <p>Telefon:</p>
            <input type="number" />
          </label>
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
        </form>
      </section>
    </section>
  );
};
