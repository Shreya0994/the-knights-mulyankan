import { NavbarMenuList } from "@/library/navbar-menu";

const navbarMenuList = new NavbarMenuList([
  { page: "Home", path: "/", submenu: [] },
  { page: "About", path: "/about", submenu: [] },
  { page: "Services", path: "/service", submenu: [] },
  {
    page: "Department",
    path: "/department",
    submenu: [],
  },
  {
    page: "Doctor",
    path: "/",
    submenu: [
      { page: "Doctors", path: "/doctors" },
      { page: "Appointment", path: "/appointment" },
    ],
  },
  {
    page: "Blogs",
    path: "/blogs",
    submenu: [],
  },
  { page: "Contact", path: "/contact", submenu: [] },
]);

export { navbarMenuList };
