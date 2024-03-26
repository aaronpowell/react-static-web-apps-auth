import React from "react";
import { StaticWebAppsClassName } from "./constants";
import { AuthProviders } from "./types";

const UserPurge = ({
  globally,
  provider,
  label
}: {
  globally: boolean;
  provider: AuthProviders;
  label?: string
}) => {
  const host = globally ? "identity.azurestaticapps.net" : location.hostname;

  return (
    <a
      href={`https://${host}/.auth/purge/${provider}`}
      className={`purge ${StaticWebAppsClassName}`}
    >
      {label ?? "Purge user information"}
    </a>
  );
};

UserPurge.defaultProps = {
  globally: false,
};

export { UserPurge };
