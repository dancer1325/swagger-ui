# <img src="https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SWU-logo-clr.png" width="300">


## Introduction
* [Swagger UI](https://swagger.io/tools/swagger-ui/)
* allows
  * visualizing and interact with the API’s resources / 👁️ without having any of the implementation logic in place 👁
    * -> make easier for 
      * back end implementation and
      * client side consumption
* how does it work?
  * from your OpenAPI Specification️ -> automatically generated    

## General
3 different NPM modules:

* [swagger-ui](https://www.npmjs.com/package/swagger-ui)
  * := traditional npm module
  * uses
    * SPA / -- are capable of -- resolving dependencies (via Webpack, Browserify, etc.).
* [swagger-ui-dist](https://www.npmjs.com/package/swagger-ui-dist) 
  * := dependency-free module 
  * uses
    * serve Swagger UI on
      * server-side project, or 
      * SPA / can NOT resolve npm module dependencies
  * vs swagger-ui
    * bigger
* [swagger-ui-react](https://www.npmjs.com/package/swagger-ui-react) 
  * == Swagger UI / -- packaged as -- React component
  * uses
    * React applications

---
* if you are looking for plain ol' HTML/JS/CSS -> copy the contents of the `/dist` folder -- to -- your server


## Compatibility
The OpenAPI Specification has undergone 5 revisions since initial creation in 2010.  Compatibility between Swagger UI and the OpenAPI Specification is as follows:

| Swagger UI Version | Release Date | OpenAPI Spec compatibility             | Notes                                                                 |
|--------------------|--------------|----------------------------------------|-----------------------------------------------------------------------|
| 5.0.0              | 2023-06-12   | 2.0, 3.0.0, 3.0.1, 3.0.2, 3.0.3, 3.1.0 | [tag v5.0.0](https://github.com/swagger-api/swagger-ui/tree/v5.0.0)   |
| 4.0.0              | 2021-11-03   | 2.0, 3.0.0, 3.0.1, 3.0.2, 3.0.3        | [tag v4.0.0](https://github.com/swagger-api/swagger-ui/tree/v4.0.0)   |
| 3.18.3             | 2018-08-03   | 2.0, 3.0.0, 3.0.1, 3.0.2, 3.0.3        | [tag v3.18.3](https://github.com/swagger-api/swagger-ui/tree/v3.18.3) |
| 3.0.21             | 2017-07-26   | 2.0                                    | [tag v3.0.21](https://github.com/swagger-api/swagger-ui/tree/v3.0.21) |
| 2.2.10             | 2017-01-04   | 1.1, 1.2, 2.0                          | [tag v2.2.10](https://github.com/swagger-api/swagger-ui/tree/v2.2.10) |
| 2.1.5              | 2016-07-20   | 1.1, 1.2, 2.0                          | [tag v2.1.5](https://github.com/swagger-api/swagger-ui/tree/v2.1.5)   |
| 2.0.24             | 2014-09-12   | 1.1, 1.2                               | [tag v2.0.24](https://github.com/swagger-api/swagger-ui/tree/v2.0.24) |
| 1.0.13             | 2013-03-08   | 1.1, 1.2                               | [tag v1.0.13](https://github.com/swagger-api/swagger-ui/tree/v1.0.13) |
| 1.0.1              | 2011-10-11   | 1.0, 1.1                               | [tag v1.0.1](https://github.com/swagger-api/swagger-ui/tree/v1.0.1)   |

## Documentation

#### Usage
- [Installation](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/installation.md)
- [Configuration](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/configuration.md)
- [CORS](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/cors.md)
- [OAuth2](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/oauth2.md)
- [Deep Linking](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/deep-linking.md)
- [Limitations](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/limitations.md)
- [Version detection](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/version-detection.md)

#### Customization
- [Overview](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/customization/overview.md)
- [Plugin API](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/customization/plugin-api.md)
- [Custom layout](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/customization/custom-layout.md)

#### Development
- [Setting up](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/development/setting-up.md)
- [Scripts](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/development/scripts.md)

#### Contributing
- [Contributing](https://github.com/swagger-api/.github/blob/HEAD/CONTRIBUTING.md)

##### Integration Tests

You will need JDK of version 7 or higher as instructed here
https://nightwatchjs.org/guide/getting-started/installation.html#install-selenium-server

Integration tests can be run locally with `npm run e2e` - be sure you aren't running a dev server when testing!

### Browser support
* latest versions of
  * Chrome
  * Safari
  * Firefox
  * Edge

### Known Issues

To help with the migration, here are the currently known issues with 3.X. This list will update regularly, and will not include features that were not implemented in previous versions.

- Only part of the parameters previously supported are available.
- The JSON Form Editor is not implemented.
- Support for `collectionFormat` is partial.
- l10n (translations) is not implemented.
- Relative path support for external files is not implemented.
