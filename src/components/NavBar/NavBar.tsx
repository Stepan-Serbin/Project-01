import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import clsx from "clsx";
import { ROUTES as R } from "../../shared/routes";
import { useCount } from "../../hooks/useCount";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(s.link, isActive && s.active);

export default function NavBar() {
  const { count } = useCount();
  return (
    <nav className={s.container}>
      <span>{count}</span>
      <NavLink to={R.HOME} className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to={R.COUNTER} className={navLinkClass}>
        Counter
      </NavLink>
      <NavLink to={R.NATIONALIZE} className={navLinkClass}>
        Nationalize
      </NavLink>
      <NavLink to={R.SPACE_MISSION} className={navLinkClass}>
        Space Mission
      </NavLink>
      <NavLink to={R.CONTACTS} className={navLinkClass}>
        Contacts
      </NavLink>
      <NavLink to={R.ABOUT} className={navLinkClass}>
        About
      </NavLink>
      <NavLink to={R.PROFILE} className={navLinkClass}>
        Profile
      </NavLink>
      <NavLink to={R.USERS} className={navLinkClass}>
        Users
      </NavLink>

      <NavLink to={R.CREATE_CATEGORY} className={navLinkClass}>
        Create Category
      </NavLink>

      <NavLink to={R.SIGNIN} className={navLinkClass}>
        Sign In
      </NavLink>

      <NavLink to={R.SIGNUP} className={navLinkClass}>
        Sign Up Free
      </NavLink>
    </nav>
  );
}