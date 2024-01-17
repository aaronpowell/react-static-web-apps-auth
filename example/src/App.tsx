import logo from "./assets/react.svg";
import "./App.css";
import {
  Logout,
  StaticWebAuthLogins,
  ClientPrincipalContextProvider,
  UserPurge,
  useClientPrincipal,
} from "@aaronpowell/react-static-web-apps-auth";

const UserDisplay = () => {
  const { clientPrincipal, loaded } = useClientPrincipal();

  if (!loaded) {
    return <p>Checking user info...</p>;
  }

  if (clientPrincipal) {
    return (
      <div>
        <p>
          {clientPrincipal.identityProvider} {clientPrincipal.userDetails}{" "}
          {clientPrincipal.userId} {clientPrincipal.userRoles}
        </p>
        <p>
          <Logout />
        </p>
        <p>
          <UserPurge provider={clientPrincipal.identityProvider} />
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
        <StaticWebAuthLogins
          customProviders={[{ id: "okta", name: "Okta" }]}
          label={(name) => `Do sign in ${name}`}
        />

        <br />
        <p>Login with custom renderer.</p>
        <StaticWebAuthLogins
          customProviders={[{ id: "okta", name: "Okta" }]}
          customRenderer={({ href, className, name }) => (
            <button className="login-button">
              <a href={href} className={className}>
                Custom Login Renderer - {name}
              </a>
            </button>
          )}
        />

        <ClientPrincipalContextProvider>
          <UserDisplay />
        </ClientPrincipalContextProvider>
      </header>
    </div>
  );
}

export default App;
