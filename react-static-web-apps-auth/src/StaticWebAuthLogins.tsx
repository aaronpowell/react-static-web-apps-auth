import React from "react";
import Login, { LoginProps, RenderLoginProps } from "./Login";

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
  customRenderer?: (props: RenderLoginProps) => JSX.Element;
};

type LoginWrapperProps = Pick<
  LoginProps,
  "postLoginRedirect" | "label" | "customRenderer"
>;

const AzureADLogin = ({
  postLoginRedirect,
  label,
  customRenderer,
}: LoginWrapperProps) => (
  <Login
    name="Azure AD"
    id="aad"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="aad"
    customRenderer={customRenderer}
  />
);
const FacebookLogin = ({
  postLoginRedirect,
  label,
  customRenderer,
}: LoginWrapperProps) => (
  <Login
    name="Facebook"
    id="facebook"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="facebook"
    customRenderer={customRenderer}
  />
);
const TwitterLogin = ({
  postLoginRedirect,
  label,
  customRenderer,
}: LoginWrapperProps) => (
  <Login
    name="Twitter"
    id="twitter"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="twitter"
    customRenderer={customRenderer}
  />
);
const GitHubLogin = ({
  postLoginRedirect,
  label,
  customRenderer,
}: LoginWrapperProps) => (
  <Login
    name="GitHub"
    id="github"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="github"
    customRenderer={customRenderer}
  />
);
const GoogleLogin = ({
  postLoginRedirect,
  label,
  customRenderer,
}: LoginWrapperProps) => (
  <Login
    name="Google"
    id="google"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="google"
    customRenderer={customRenderer}
  />
);
const AppleLogin = ({
  postLoginRedirect,
  label,
  customRenderer,
}: LoginWrapperProps) => (
  <Login
    name="Apple"
    id="apple"
    postLoginRedirect={postLoginRedirect}
    label={label}
    key="apple"
    customRenderer={customRenderer}
  />
);

const CustomProviderLogin = ({
  postLoginRedirect,
  id,
  name,
  label,
  customRenderer,
}: LoginWrapperProps & CustomProvider) => (
  <Login
    name={name || id}
    id={id}
    postLoginRedirect={postLoginRedirect}
    label={label}
    key={id}
    customRenderer={customRenderer}
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
        customRenderer={props.customRenderer}
      />
    );
  }
  if (props.apple) {
    providers.push(
      <AppleLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="apple"
        customRenderer={props.customRenderer}
      />
    );
  }
  if (props.facebook) {
    providers.push(
      <FacebookLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="facebook"
        customRenderer={props.customRenderer}
      />
    );
  }
  if (props.twitter) {
    providers.push(
      <TwitterLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="twitter"
        customRenderer={props.customRenderer}
      />
    );
  }
  if (props.github) {
    providers.push(
      <GitHubLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="github"
        customRenderer={props.customRenderer}
      />
    );
  }
  if (props.google) {
    providers.push(
      <GoogleLogin
        postLoginRedirect={props.postLoginRedirect}
        label={props.label}
        key="google"
        customRenderer={props.customRenderer}
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
          customRenderer={props.customRenderer}
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
