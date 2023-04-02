import Link from "next/link";
import { navbarMenuList } from "@/data/navbar-data";
import { NavbarList } from "@/library/navbar-menu";

const MenuItems = (props: { props: NavbarList }) => {
  return props.props.submenu && props.props.submenu.length > 0 ? (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        href="department.html"
        id="dropdown02"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.props.page} <i className="icofont-thin-down"></i>
      </Link>
      <ul className="dropdown-menu" aria-labelledby="dropdown02">
        {props.props.submenu.map((menu, subindex) => (
          <li key={subindex}>
            <Link className="dropdown-item" href={menu.path}>
              {menu.page}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  ) : (
    <li className="nav-item">
      <Link className="nav-link" href={props.props.path}>
        {props.props.page}
      </Link>
    </li>
  );
};

export default MenuItems;
