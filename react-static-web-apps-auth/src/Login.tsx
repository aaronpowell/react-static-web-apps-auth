import React from "react";
import { StaticWebAppsClassName } from "./constants";
import { AuthProviders } from "./types";

const Login = ({
  name,
  id,
  postLoginRedirect,
}: {
  name: string;
  id: AuthProviders;
  postLoginRedirect: string;
}) => {
  return (
    <a
      href={`/.auth/login/${id}${
        postLoginRedirect ? `?post_login_redirect=${postLoginRedirect}` : ""
      }`}
      className={`${id} login ${StaticWebAppsClassName}`}
    >
      Sign in using {name}
    </a>
  );
};

export default Login;
