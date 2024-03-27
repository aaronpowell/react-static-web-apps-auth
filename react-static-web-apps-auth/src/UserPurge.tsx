import React from "react";
import { StaticWebAppsClassName } from "./constants";
import { AuthProviders } from "./types";

type UserPurgeRenderProps = {
  label: string;
  href: string;
  className: string;
};

const UserPurge = ({
  globally,
  provider,
  label,
  customRenderer,
}: {
  globally: boolean;
  provider: AuthProviders;
  label?: string;
  customRenderer?: (props: UserPurgeRenderProps) => JSX.Element;
}) => {
  const host = globally
    ? "https://identity.azurestaticapps.net"
    : location.origin;
  const href = `${host}/.auth/purge/${provider}`;
  const className = `purge ${StaticWebAppsClassName}`;

  return customRenderer ? (
    customRenderer({
      href,
      className,
      label: label ?? "Purge user information",
    })
  ) : (
    <DefaultRenderer
      href={href}
      className={className}
      label={label ?? "Purge user information"}
    />
  );
};

UserPurge.defaultProps = {
  globally: false,
};

const DefaultRenderer = (props: UserPurgeRenderProps) => (
  <a href={props.href} className={props.className}>
    {props.label}
  </a>
);

export { UserPurge };
