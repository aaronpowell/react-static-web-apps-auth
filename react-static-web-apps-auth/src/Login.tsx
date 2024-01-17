import React from "react";
import { StaticWebAppsClassName } from "./constants";
import { AuthProviders } from "./types";

export type LoginProps = {
  name: string;
  id: AuthProviders;
  postLoginRedirect?: string;
  label?: (name: string) => string;
};

const Login = ({
  name,
  id,
  postLoginRedirect,
  label = (name) => `Sign in using ${name}`,
}: LoginProps) => {
  return (
    <a
      href={`/.auth/login/${id}${
        postLoginRedirect ? `?post_login_redirect_uri=${postLoginRedirect}` : ""
      }`}
      className={`${id} login ${StaticWebAppsClassName}`}
    >
      {label(name)}
    </a>
  );
};

export default Login;
