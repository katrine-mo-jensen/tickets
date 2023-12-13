import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/overview">Min oversigt</Link>
      </li>
      <li>
        <Link to="/booking">Mine bookings</Link>
      </li>
      <li>
        <Link to="/register">Opret ny event</Link>
      </li>
      <li>
        <Link to="/login">Profil</Link>
      </li>
    </ul>
  );
};
