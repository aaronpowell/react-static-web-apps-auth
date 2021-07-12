# Static Web App Auth tools for React

![Node.js CI](https://github.com/aaronpowell/react-static-web-apps-auth/workflows/Node.js%20CI/badge.svg) | [![npm version](https://img.shields.io/npm/v/@aaronpowell/react-static-web-apps-auth)](https://npmjs.org/package/@aaronpowell/react-static-web-apps-auth)

This package is a series of helper tools for working with [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=javascript-12079-aapowell) [Authentication and Authorization](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization?WT.mc_id=javascript-12079-aapowell) from React.

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
      <StaticWebAppsAuthLogins aad={true} twitter={false} customProviders={[ id: "okta", name: "Okta" ]} />
    </div>
  );
};
```

This component will display all the auth providers you want to use on your application and links for the user. Custom OIDC providers can be registered using the `customProviders` prop and provide the `id` of the provider and the `name` you want displayed to the user.

By default, only [managed auth providers](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization?WT.mc_id=javascript-12079-aapowell) will display, but they can be turned off by setting their corresponding prop to `false`. All providers available [as configurable options](https://docs.microsoft.com/azure/static-web-apps/authentication-custom?tabs=aad&WT.mc_id=javascript-12079-aapowell) can be enabled using props.

To redirect to a specific URL post-login, provide that path in the `postLoginRedirect` prop.

The default label is `Sign in using ${name}`, but can be overridden with the `label` prop, which takes a function that receives the `name` of the provider and returns the label string.

### `<ClientPrincipalContextProvider>`

```typescript
const App = () => {
  return (
    <ClientPrincipalContextProvider>
      <MySite />
    </ClientPrincipalContextProvider>
  );
};
```

This component provides React Context for the current user (or a series of `undefined` values when you're not logged in), aligning with the information available [in the Client Principal](https://docs.microsoft.com/azure/static-web-apps/user-information?tabs=javascript#client-principal-data&WT.mc_id=javascript-12079-aapowell).

Additionally, a `useContext` React Hook is available, `useClientPrincipal`, for use within the application.

### `<Logout />`

This component provides the logout function through Static Web Apps.

To redirect to a specific URL post-logout, provide the path in the `postLogoutRedirect` prop.

### `<UserPurge />`

This component provides the user with the ability to [remove their identifying information from Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization?WT.mc_id=javascript-12079-aapowell#remove-personal-identifying-information). By default it'll only purge them from the current domain, but set the `globally` prop to `true` if you with to give them the ability to completely remove themselves from Static Web Apps.

## Styling

Each of the components generates minimal HTML (a single `<a>` tag) to make it easier to style within an application. The DOM elements have the class `azure-swa-auth`, defined in `./constants` as `StaticWebAppsClassName`, on them, along with the component type, `login`, `logout` or `purge`.

Additionally, the login components have the provider as a class, so providers can be styled individually.

## License

MIT
