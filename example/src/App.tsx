import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  StaticWebAuthLogins,
  UserInfoContextProvider,
  useUserInfo,
} from "@aaronpowell/react-static-web-apps-auth";

const UserDisplay = () => {
  const userInfo = useUserInfo();
  if (userInfo.identityProvider) {
    return (
      <p>
        {userInfo.identityProvider} {userInfo.userDetails} {userInfo.userId}{" "}
        {userInfo.userRoles}
      </p>
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
        <StaticWebAuthLogins />

        <UserInfoContextProvider>
          <UserDisplay />
        </UserInfoContextProvider>
      </header>
    </div>
  );
}

export default App;
