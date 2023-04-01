import { companyInformation } from "@/data/company-information";

const HeaderTopBar = () => {
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="top-bar-info list-inline-item pl-0 mb-0">
              <li className="list-inline-item">
                <a href="mailto:support@gmail.com">
                  <i className="icofont-support-faq mr-2"></i>
                  {companyInformation.contactInformation.email}
                </a>
              </li>
              <li className="list-inline-item">
                <i className="icofont-location-pin mr-2"></i>
                {companyInformation.contactInformation.address}
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
              <a href="tel:+23-345-67890">
                <span>Call Now : </span>
                <span className="h4">
                  {companyInformation.contactInformation.phoneNumber}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
