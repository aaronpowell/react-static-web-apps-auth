import React from "react";
import AuthProvider from "./AuthProvider";

export type AuthProvidersProps = {
  azureAD: boolean;
  facebook: boolean;
  twitter: boolean;
  github: boolean;
  google: boolean;
};

const defaultProps = {
  azureAD: true,
  facebook: true,
  twitter: true,
  github: true,
  google: true,
};

const AuthProviders = (props: AuthProvidersProps) => {
  const providers: JSX.Element[] = [];

  if (props.azureAD) {
    providers.push(<AuthProvider name="Azure AD" id="aad" key="aad" />);
  }
  if (props.facebook) {
    providers.push(
      <AuthProvider name="Facebook" id="facebook" key="facebook" />
    );
  }
  if (props.twitter) {
    providers.push(<AuthProvider name="Twitter" id="twitter" key="twitter" />);
  }
  if (props.github) {
    providers.push(<AuthProvider name="GitHub" id="github" key="github" />);
  }
  if (props.google) {
    providers.push(<AuthProvider name="Google" id="google" key="google" />);
  }

  return <>{providers}</>;
};

AuthProviders.defaultProps = defaultProps;

export { AuthProviders };
