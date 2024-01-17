import React from "react";
import { StaticWebAppsClassName } from "./constants";
import { AuthProviders } from "./types";

export type LoginProps = {
  name: string;
  id: AuthProviders;
  postLoginRedirect?: string;
  label?: (name: string) => string;
  customRenderer?: (props: RenderLoginProps) => JSX.Element;
};

export type RenderLoginProps = LoginProps & {
  href: string;
  className: string;
};

const Login = (props: LoginProps) => {
  const href = `/.auth/login/${props.id}${
    props.postLoginRedirect
      ? `?post_login_redirect_uri=${props.postLoginRedirect}`
      : ""
  }`;
  const className = `${props.id} login ${StaticWebAppsClassName}`;

  return props.customRenderer ? (
    props.customRenderer({ ...props, href, className })
  ) : (
    <DefaultRenderer {...props} href={href} className={className} />
  );
};

const DefaultRenderer = ({
  name,
  label = (name) => `Sign in using ${name}`,
  href,
  className,
}: RenderLoginProps) => (
  <a href={href} className={className}>
    {label(name)}
  </a>
);

export default Login;
