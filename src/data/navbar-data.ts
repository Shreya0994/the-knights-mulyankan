import { NavbarMenuList } from "@/library/navbar-menu";

const navbarMenuList = new NavbarMenuList([
  { page: "Home", path: "/", submenu: [] },
  { page: "About", path: "about", submenu: [] },
  { page: "Services", path: "service", submenu: [] },
  {
    page: "Department",
    path: "",
    submenu: [
      { page: "Department", path: "department" },
      { page: "Department Single", path: "departmentsingle" },
    ],
  },
]);

export { navbarMenuList };
