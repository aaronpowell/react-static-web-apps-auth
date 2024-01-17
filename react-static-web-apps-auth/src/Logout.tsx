import React from "react";
import { StaticWebAppsClassName } from "./constants";

export type RenderLogoutProps = {
  href: string;
  className: string;
};

const Logout = ({
  postLogoutRedirect,
  customRenderer,
}: {
  postLogoutRedirect?: string;
  customRenderer?: (props: RenderLogoutProps) => JSX.Element;
}) => {
  const href = `/.auth/logout${
    postLogoutRedirect ? `?post_logout_redirect_uri=${postLogoutRedirect}` : ""
  }`;
  const className = `logout ${StaticWebAppsClassName}`;

  if (customRenderer) {
    return customRenderer({ href, className });
  }

  return (
    <a href={href} className={className}>
      Logout
    </a>
  );
};

export { Logout };
