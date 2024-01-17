import React from "react";
import Login, { LoginProps } from "./Login";

export type CustomProvider = {
  id: string;
  name?: string;
};

export type LoginProviderProps = {
  azureAD: boolean;
  facebook: boolean;
  twitter: boolean;
  github: boolean;
  google: boolean;
  apple: boolean;
  postLoginRedirect?: string;
  customProviders?: CustomProvider[];
  label?: (name: string) => string;
};

type LoginWrapperProps = Pick<LoginProps, "postLoginRedirect" | "label">;

const AzureADLogin = ({ postLoginRedirect, label }: LoginWrapperProps) => (
  <Login
    name="Azure AD"
    id="aad"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="aad"
  />
);
const FacebookLogin = ({ postLoginRedirect, label }: LoginWrapperProps) => (
  <Login
    name="Facebook"
    id="facebook"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="facebook"
  />
);
const TwitterLogin = ({ postLoginRedirect, label }: LoginWrapperProps) => (
  <Login
    name="Twitter"
    id="twitter"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="twitter"
  />
);
const GitHubLogin = ({ postLoginRedirect, label }: LoginWrapperProps) => (
  <Login
    name="GitHub"
    id="github"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="github"
  />
);
const GoogleLogin = ({ postLoginRedirect, label }: LoginWrapperProps) => (
  <Login
    name="Google"
    id="google"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="google"
  />
);
const AppleLogin = ({ postLoginRedirect, label }: LoginWrapperProps) => (
  <Login
    name="Apple"
    id="apple"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="apple"
  />
);

const CustomProviderLogin = ({
  postLoginRedirect,
  id,
  name,
  label,
}: LoginWrapperProps & CustomProvider) => (
  <Login
    name={name || id}
    id={id}
    postLoginRedirect={postLoginRedirect}
    label={label}
    key={id}
  />
);

const StaticWebAuthLogins = (props: LoginProviderProps) => {
  const providers: JSX.Element[] = [];

  if (props.azureAD) {
    providers.push(
      <AzureADLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="aad"
      />
    );
  }
  if (props.apple) {
    providers.push(
      <AppleLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="apple"
      />
    );
  }
  if (props.facebook) {
    providers.push(
      <FacebookLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="facebook"
      />
    );
  }
  if (props.twitter) {
    providers.push(
      <TwitterLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="twitter"
      />
    );
  }
  if (props.github) {
    providers.push(
      <GitHubLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="github"
      />
    );
  }
  if (props.google) {
    providers.push(
      <GoogleLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="google"
      />
    );
  }

  if (props.customProviders) {
    for (const provider of props.customProviders) {
      providers.push(
        <CustomProviderLogin
          name={provider.name}
          id={provider.id}
          postLoginRedirect={props.postLoginRedirect}
          label={props.label}
          key={provider.id}
        />
      );
    }
  }

  return <>{providers}</>;
};

StaticWebAuthLogins.defaultProps = {
  azureAD: true,
  facebook: false,
  twitter: true,
  github: true,
  google: false,
  apple: false,
  postLoginRedirect: "",
};

export {
  StaticWebAuthLogins,
  AzureADLogin,
  FacebookLogin,
  GitHubLogin,
  GoogleLogin,
  TwitterLogin,
  AppleLogin,
  CustomProviderLogin,
};
