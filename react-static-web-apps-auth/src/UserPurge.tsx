import React from "react";
import { StaticWebAppsClassName } from "./constants";
import { AuthProviders } from "./types";

const UserPurge = ({
  globally,
  provider,
}: {
  globally: boolean;
  provider: AuthProviders;
}) => {
  const host = globally ? "identity.azurestaticapps.net" : location.hostname;

  return (
    <a
      href={`https://${host}/.auth/purge/${provider}`}
      className={`purge ${StaticWebAppsClassName}`}
    >
      Purge user information
    </a>
  );
};

UserPurge.defaultProps = {
  globally: false,
};

export { UserPurge };
