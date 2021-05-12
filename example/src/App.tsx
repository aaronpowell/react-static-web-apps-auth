import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Logout,
  StaticWebAuthLogins,
  UserInfoContextProvider,
  UserPurge,
  useUserInfo,
} from "@aaronpowell/react-static-web-apps-auth";

const UserDisplay = () => {
  const userInfo = useUserInfo();
  if (userInfo.identityProvider) {
    return (
      <div>
        <p>
          {userInfo.identityProvider} {userInfo.userDetails} {userInfo.userId}{" "}
          {userInfo.userRoles}
        </p>
        <p>
          <Logout />
        </p>
        <p>
          <UserPurge provider={userInfo.identityProvider} />
        </p>
      </div>
    );
  }

  return <p>User not signed in</p>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StaticWebAuthLogins
          customProviders={[{ id: "okta", name: "Okta" }]}
          label={(name) => `Do sign in ${name}`}
        />

        <UserInfoContextProvider>
          <UserDisplay />
        </UserInfoContextProvider>
      </header>
    </div>
  );
}

export default App;
