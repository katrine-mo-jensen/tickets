import { NavLinks } from "./NavLinks";
import style from "./navBar.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const burgerOpen = (
    <FaUserCircle className={style.burger} onClick={() => setOpen(!open)} />
  );
  const burgerClosed = (
    <IoMdCloseCircle className={style.burger} onClick={() => setOpen(!open)} />
  );
  return (
    <nav>
      <section className={style.navigation}>
        <h2>Book.it - Din online event kalender</h2>
        <section className={style.burgerMenu}>
          {open ? burgerClosed : burgerOpen}
          {open && <NavLinks />}
        </section>
      </section>
    </nav>
  );
};
