import { Link } from "react-router-dom";
import style from "./LoginPage.module.scss";

export const LoginPage = () => {
  return (
    <section className={style.container}>
      <section className={style.form}>
        <h1>Log ind</h1>
        <form>
          <label>
            <p>Email:</p>
            <input type="email" />
          </label>
          <label>
            <p>Password:</p>
            <input type="password" />
          </label>
          <section>
            <button className={style.rightBtn} type="sumbit">Log ind</button>
            <button className={style.leftBtn}>
              <Link className={style.link} to="/signup">Tilmeld</Link>
            </button>
          </section>
        </form>
      </section>
    </section>
  );
};
