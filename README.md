# Static Web App Auth tools for React

This package is a series of helper tools for working with [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/) [Authentication and Authorization](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization) from React.

## Installation

You can install a stable release from npm:

```bash
npm install @aaronpowell/react-static-web-apps-auth
```

Or you can install the latest build from GitHub packages.

## Usage

The package contains some components that wrap the functionality for you.

### `<StaticWebAppsAuthLogins />`

```typescript
const Login = () => {
  return (
    <div>
      <h2>Login to our site</h2>
      <StaticWebAppsAuthLogins aad={false} />
    </div>
  );
};
```

This component will display all the auth providers you want to use on your application and links for the user.

By default all auth providers will display, but they can be turned off by setting their corresponding prop to `false`.

To redirect to a specific URL post-login, provide that path in the `postLoginRedirect` prop.

### `<UserInfoContextProvider>`

```typescript
const App = () => {
  return (
    <UserInfoContextProvider>
      <MySite />
    </UserInfoContextProvider>
  );
};
```

This component provides React Context for the current user (or a series of `undefined` values when you're not logged in), aligning with the information available [in the Client Principal](https://docs.microsoft.com/azure/static-web-apps/user-information?tabs=javascript#client-principal-data).

Additionally, a `useContext` React Hook is available, `useUserInfo`, for use within the application.

### `<Logout />`

This component provides the logout function through Static Web Apps.

To redirect to a specific URL post-logout, provide the path in the `postLogoutRedirect` prop.

### `<UserPurge />`

This component provides the user with the ability to [remove their identifying information from Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization#remove-personal-identifying-information). By default it'll only purge them from the current domain, but set the `globally` prop to `true` if you with to give them the ability to completely remove themselves from Static Web Apps.

## License

MIT
