import React from "react";
import { StaticWebAppsClassName } from "./constants";

const Logout = ({ postLogoutRedirect }: { postLogoutRedirect?: string }) => (
  <a
    href={`/.auth/logout${
      postLogoutRedirect
        ? `?post_logout_redirect_uri=${postLogoutRedirect}`
        : ""
    }`}
    className={`logout ${StaticWebAppsClassName}`}
  >
    Logout
  </a>
);

export { Logout };
