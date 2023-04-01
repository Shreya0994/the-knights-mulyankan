import Script from "next/script";

const Scripts = () => {
  return (
    <>
      <Script src="/assets/plugins/jquery/jquery.js" />
      <Script src="/assets/plugins/bootstrap/js/popper.js" />
      <Script src="/assets/plugins/bootstrap/js/bootstrap.js" />
    </>
  );
};

export default Scripts;
