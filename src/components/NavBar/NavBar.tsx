import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink to={"/"} className={s.link}>
        Home
      </NavLink>
      <NavLink to={"/counter"} className={s.link}>
        Counter
      </NavLink>
      <NavLink to={"/nationality-reveal"} className={s.link}>
        NationalityReveal
      </NavLink>
    </nav>
  );
}