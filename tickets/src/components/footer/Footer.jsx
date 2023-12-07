import style from "./footer.module.scss"

export const Footer = () => {
  return (
    <footer>
      <section className={style.footer}>
        <p>
          Adresse: <br />
          Kongens Alle 23 <br />
          Valby
        </p>
        <p>
          Links: <br />
          <a href="#">booking.nu</a> <br />
          <a href="#">koncertpladser.dk</a>
        </p>
        <p>
          Kontakt: <br />
          Mail: booki@it.dk <br />
          Tlf: 22331122
        </p>
      </section>
    </footer>
  );
};
