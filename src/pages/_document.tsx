import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="/assets/plugins/jquery/jquery.js"></script>
        <script async src="/assets/plugins/bootstrap/js/bootstrap.js"></script>
        <script async src="/assets/plugins/counterup/jquery.easing.js"></script>
        <script
          async
          src="/assets/plugins/slick-carousel/slick/slick.min.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
