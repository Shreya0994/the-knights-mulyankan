import HeaderNavigation from "./header-navigation";
import HeaderTopBar from "./header-topbar";

const Header = () => {
  return (
    <>
      <HeaderTopBar
        emailId="support@novena.com"
        address="Address Ta-134/A, New York, USA"
        telephone='Call Now : <span class="h4">823-4565-13456</span>'
      />
      <HeaderNavigation />
    </>
  );
};

export default Header;
