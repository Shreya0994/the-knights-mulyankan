import { AuthContext, useAuthContext } from "@/context/auth-context";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { NextPageWithLayout } from "@/library/types";
import Head from "next/head";
import { ReactElement, useContext, useEffect, useRef } from "react";

const Login: NextPageWithLayout = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const authContext = useAuthContext();

  useEffect(() => {
    if (emailInputRef && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInputRef.current && passwordInputRef.current) {
      authContext.login(
        emailInputRef.current.value,
        passwordInputRef.current.value
      );
    }
  };
  return (
    <>
      <Head>
        <title>Login - Novana</title>
      </Head>
      <div className="contact-form-wrapper section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="text-md mb-2">Login</h2>
                <div className="divider mx-auto my-4"></div>
                <p className="mb-5">
                  Laboriosam exercitationem molestias beatae eos pariatur,
                  similique, excepturi mollitia sit perferendis maiores ratione
                  aliquam?
                </p>
              </div>
            </div>
            <form className="contact_form" onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      ref={emailInputRef}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      ref={passwordInputRef}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <input
                    className="btn btn-main btn-round-full"
                    name="submit"
                    type="submit"
                    value="Login"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};

export default Login;
