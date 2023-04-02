import appConfig from "@/library/configuration";
// import { User } from "@/library/types";
import Head from "next/head";
import router from "next/router";
import React, { ReactElement, useContext, useEffect, useState } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  picture?: string;
};

type AuthContextProps = {
  logout: () => void;
  login: (userName: string, password: string) => void;
  authToken: string;
  user: User | null;
};

const defaultContextProps: AuthContextProps = {
  logout: () => {},
  login: (userName: string, password: string) => {},
  user: null,
  authToken: "",
};

const AuthContext = React.createContext(defaultContextProps);

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const [loading, setLoading] = useState(false);
  //   const [isOnLoginPage, setIsOnLoadingPage] = useState(
  //     router.pathname === "/login"
  //   );
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [me, setMe] = useState<User | null>(null);

  useEffect(() => {
    console.log("In useEffect");
    setLoading(true);
    const storedAuthToken = localStorage.getItem("authToken");
    if (storedAuthToken) {
      // setIsLoggedIn(true);
      fetch(`${appConfig.apiHost}/api/secure/user`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${storedAuthToken}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setLoading(false);
          setMe(response);
        })
        .catch((error) => {
          console.log(error.status);
          if (error.status === 401) {
            setLoading(false);
            router.push("/login");
          }
        });
    } else {
      setLoading(false);
      if (router.pathname !== "/login") {
        router.push("/login");
      }
    }
  }, []);

  const loginHandler = (userName: string, password: string) => {
    // setIsLoggedIn(false);
    console.log("Login");
    fetch(`${appConfig.apiHost}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: userName, password: password }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        localStorage.setItem("authToken", response.token);
        router.push("/appointments");
      });
  };

  const logoutHandler = () => {};

  return (
    <AuthContext.Provider
      value={{
        logout: logoutHandler,
        login: loginHandler,
        authToken: authToken,
        user: me,
      }}
    >
      {loading ? (
        <>
          <Head>
            <title>Login</title>
          </Head>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
      {/* {!isLoggedIn
         ? (isOnLoginPage) ? children : 
         <span>Loading...</span> : 
         children
         } */}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (authContext === null) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }

  return authContext;
};
