import Image from "next/image";

const HeaderNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navigation" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html"></a>

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
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="service.html">
                Services
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="department.html"
                id="dropdown02"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Department <i className="icofont-thin-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown02">
                <li>
                  <a className="dropdown-item" href="department.html">
                    Departments
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="department-single.html">
                    Department Single
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="doctor.html"
                id="dropdown03"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Doctors <i className="icofont-thin-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown03">
                <li>
                  <a className="dropdown-item" href="doctor.html">
                    Doctors
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="doctor-single.html">
                    Doctor Single
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="appoinment.html">
                    Appoinment
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="blog-sidebar.html"
                id="dropdown05"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog <i className="icofont-thin-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown05">
                <li>
                  <a className="dropdown-item" href="blog-sidebar.html">
                    Blog with Sidebar
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="blog-single.html">
                    Blog Single
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
