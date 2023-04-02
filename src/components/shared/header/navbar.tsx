import { companyInformation } from "@/data/company-information";
import { navbarMenuList } from "@/data/navbar-data";
import Image from "next/image";
import MenuItems from "./menuitmes";
import Link from "next/link";

const HeaderNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navigation" id="navbar">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src={companyInformation.logo}
            alt=""
            width={160}
            height={83}
            className="img-fluid"
          />
        </Link>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarmain"
          aria-controls="navbarmain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icofont-navigation-menu"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarmain">
          <ul className="navbar-nav ml-auto">
            {navbarMenuList.mainmenu.map((page, index) => {
              return <MenuItems props={page} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
