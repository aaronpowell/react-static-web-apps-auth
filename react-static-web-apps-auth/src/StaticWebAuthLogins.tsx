import React from "react";
import Login from "./Login";

type CustomProvider = {
  id: string;
  name?: string;
};

export type LoginProviderProps = {
  azureAD: boolean;
  facebook: boolean;
  twitter: boolean;
  github: boolean;
  google: boolean;
  postLoginRedirect?: string;
  customProviders?: CustomProvider[];
};

type LoginProps = {
  postLoginRedirect?: string;
};

const AzureADLogin = ({ postLoginRedirect }: LoginProps) => (
  <Login name="Azure AD" id="aad" postLoginRedirect={postLoginRedirect} />
);
const FacebookLogin = ({ postLoginRedirect }: LoginProps) => (
  <Login name="Facebook" id="facebook" postLoginRedirect={postLoginRedirect} />
);
const TwitterLogin = ({ postLoginRedirect }: LoginProps) => (
  <Login name="Twitter" id="twitter" postLoginRedirect={postLoginRedirect} />
);
const GitHubLogin = ({ postLoginRedirect }: LoginProps) => (
  <Login name="GitHub" id="github" postLoginRedirect={postLoginRedirect} />
);
const GoogleLogin = ({ postLoginRedirect }: LoginProps) => (
  <Login name="Google" id="google" postLoginRedirect={postLoginRedirect} />
);

const CustomProvider = ({
  postLoginRedirect,
  id,
  name,
}: LoginProps & CustomProvider) => (
  <Login name={name || id} id={id} postLoginRedirect={postLoginRedirect} />
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

  if (props.customProviders) {
    for (const provider of props.customProviders) {
      providers.push(
        <CustomProvider
          name={provider.name}
          id={provider.id}
          postLoginRedirect={props.postLoginRedirect}
          key={provider.id}
        />
      );
    }
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
