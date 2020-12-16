import React from "react";

const Login = ({
  name,
  id,
  postLoginRedirect,
}: {
  name: string;
  id: string;
  postLoginRedirect: string;
}) => {
  return (
    <a
      href={`/.auth/login/${id}${
        postLoginRedirect && `?post_login_redirect=${postLoginRedirect}`
      }`}
      className={`${id} azure-swa-auth`}
    >
      Sign in using {name}
    </a>
  );
};

export default Login;
