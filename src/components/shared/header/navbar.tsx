import { companyInformation } from "@/data/company-information";
import { navbarMenuList } from "@/data/navbar-data";
import Image from "next/image";
import MenuItems from "./menuitmes";
import Link from "next/link";

const HeaderNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navigation" id="navbar">
      <div className="container">
        <Link className="navbar-brand" href="index.html">
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
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="doctor.html"
                id="dropdown03"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Doctors <i className="icofont-thin-down"></i>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdown03">
                <li>
                  <Link className="dropdown-item" href="doctor.html">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="doctor-single.html">
                    Doctor Single
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="appoinment.html">
                    Appoinment
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="blog-sidebar.html"
                id="dropdown05"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog <i className="icofont-thin-down"></i>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdown05">
                <li>
                  <Link className="dropdown-item" href="blog-sidebar.html">
                    Blog with Sidebar
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="blog-single.html">
                    Blog Single
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="contact.html">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
