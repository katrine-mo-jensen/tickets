import { Link } from "react-router-dom";

export const NavLinks = () => {
    return (
        <ul>
            <li><Link to="/overview">Din oversigt</Link></li>
            <li><Link to="/booking">Dine bookings</Link></li>
            <li><Link to="/register">Opret ny event</Link></li>
            <li><Link to="/welcome">Profil</Link></li>
            {/* <li><Link to="/politik">Politik</Link></li>
            <li><Link to="/samfund">Samfund</Link></li> */}
        </ul>
    )
}