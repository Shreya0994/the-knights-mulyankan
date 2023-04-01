export interface INavbarMenuList {
  mainmenu: Array<NavbarList>;
}
export type NavbarList = {
  page: string;
  path: string;
  submenu: Array<NavSubmenu>;
};

export type NavSubmenu = {
  page: string;
  path: string;
};
export class NavbarMenuList implements INavbarMenuList {
  public mainmenu: NavbarList[];
  constructor(mainmenu: Array<NavbarList>) {
    this.mainmenu = mainmenu;
  }
}
