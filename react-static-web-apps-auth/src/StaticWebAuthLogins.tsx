import React from "react";
import Login from "./Login";

export type LoginProviderProps = {
  azureAD: boolean;
  facebook: boolean;
  twitter: boolean;
  github: boolean;
  google: boolean;
  postLoginRedirect: string;
};

const AzureADLogin = ({ postLoginRedirect }: { postLoginRedirect: string }) => (
  <Login name="Azure AD" id="aad" postLoginRedirect={postLoginRedirect} />
);
const FacebookLogin = ({
  postLoginRedirect,
}: {
  postLoginRedirect: string;
}) => (
  <Login name="Facebook" id="facebook" postLoginRedirect={postLoginRedirect} />
);
const TwitterLogin = ({ postLoginRedirect }: { postLoginRedirect: string }) => (
  <Login name="Twitter" id="twitter" postLoginRedirect={postLoginRedirect} />
);
const GitHubLogin = ({ postLoginRedirect }: { postLoginRedirect: string }) => (
  <Login name="GitHub" id="github" postLoginRedirect={postLoginRedirect} />
);
const GoogleLogin = ({ postLoginRedirect }: { postLoginRedirect: string }) => (
  <Login name="Google" id="google" postLoginRedirect={postLoginRedirect} />
);

const StaticWebAuthLogins = (props: LoginProviderProps) => {
  const providers: JSX.Element[] = [];

  if (props.azureAD) {
    providers.push(
      <AzureADLogin postLoginRedirect={props.postLoginRedirect} />
    );
  }
  if (props.facebook) {
    providers.push(
      <FacebookLogin postLoginRedirect={props.postLoginRedirect} />
    );
  }
  if (props.twitter) {
    providers.push(
      <TwitterLogin postLoginRedirect={props.postLoginRedirect} />
    );
  }
  if (props.github) {
    providers.push(<GitHubLogin postLoginRedirect={props.postLoginRedirect} />);
  }
  if (props.google) {
    providers.push(<GoogleLogin postLoginRedirect={props.postLoginRedirect} />);
  }

  return <>{providers}</>;
};

StaticWebAuthLogins.defaultProps = {
  azureAD: true,
  facebook: true,
  twitter: true,
  github: true,
  google: true,
  postLoginRedirect: "",
};

export {
  StaticWebAuthLogins,
  AzureADLogin,
  FacebookLogin,
  GitHubLogin,
  GoogleLogin,
  TwitterLogin,
};
