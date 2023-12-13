import { Outlet } from "react-router-dom";
import { Navigation } from "../components/nav/Navigation";
import { Footer } from "../components/footer/Footer";
import style from "./layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
