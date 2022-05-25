# Changelog for `react-static-web-apps-auth`

## [1.4.0] - unreleased

### Added

- Expose the SWA auth cookie, incase you need it in the browser

## [1.3.0] - 2022-05-16

### Changed

- Using React 18
- Internally using npm workspaces for better dependency management

## [1.2.0] - 2021-07-12

### Changed

- Removed remaining references to `UserInfo` and using `ClientPrincipal` instead

## [1.1.0] - 2021-06-28

### Added

- Keys to the login providers, fixing a React error
- Better handling of when you are running locally but without the SWA CLI
- devcontainer for local development

### Changed

- Overhaul of the data exposed via the context provider to achieve https://github.com/aaronpowell/react-static-web-apps-auth/issues/3
- Renamed the exported types to better reflect the names in the docs (`UserInfo` -> `ClientPrincipal`)

## [1.0.0] - 2021-05-13

### Added

- Support for custom auth providers as per GA
- Support for Apple as a provider
- Ability to override the label of the provider

### Changed

- Only AAD, GitHub and Twitter are enabled by default, matching the providers for free tier

## [0.1.7] - 2021-03-11

### Fixed

- Redirect URLs for login/logout didn't work due to a wrong query string

## [0.1.6] - 2021-03-11

### Changed

- Making the `postLoginRedirect` optional on login components

## [0.1.4] - 2021-01-11

### Changed

- More work on build/release pipeline

## [0.1.3] - 2021-01-04

### Fixed

- Release workflow didn't build before publishing

## [0.1.2]

Poking DevOps pipelines and setting README.

## [0.1.0] - 2020-12-18

Initial Release 🎉

## Added

- Components for login
- Component for logout
- Component for purging user profiles
- Context for accessing user profile
