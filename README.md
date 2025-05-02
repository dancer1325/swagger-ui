# <img src="https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SWU-logo-clr.png" width="300">


## Introduction
* [Swagger UI](https://swagger.io/tools/swagger-ui/)
* allows
  * about your API’s resources / 👁️ WITHOUT having implementation logic 👁,
    * visualize
    * interact
* use cases
  * make easier for 
    * back end implementation
    * client side consumption
* how does it work?
  * from your OpenAPI Specification️ -> AUTOMATICALLY generated    

## General

* EXISTING NPM modules
  * [swagger-ui](https://www.npmjs.com/package/swagger-ui)
    * := traditional npm module
    * uses
      * SPA / -- are capable of -- resolving dependencies (via Webpack, Browserify, etc.)
    * recommendations
      * use this one
  * [swagger-ui-dist](https://www.npmjs.com/package/swagger-ui-dist) 
    * := dependency-free module 
    * uses
      * serve Swagger UI |
        * server-side project / -- need assets to serve to -- clients or 
        * SPA / ❌can NOT resolve npm module dependencies ❌
    * vs swagger-ui
      * bigger
  * [swagger-ui-react](https://www.npmjs.com/package/swagger-ui-react) 
    * == Swagger UI / -- packaged as -- React component
    * uses
      * React applications

* if you need HTML/JS/CSS -> copy `dist/` | your server

## Compatibility

* | 2010, creation
* Swagger UI -- compatibility with -- OpenAPI Specification

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

* [here](docs)

##### Integration Tests

* requirements
  * JDK v7+
    * follow [these instructions](https://nightwatchjs.org/guide/getting-started/installation.html#install-selenium-server)
* `npm run e2e`

### Browser support
* latest versions of
  * Chrome
  * Safari
  * Firefox
  * Edge

### Known Issues | v3.x

- partial support
  - `collectionFormat`
  - previously parameters  
- ❌NOT implemented❌ 
  - JSON Form Editor
  - l10n (translations)
  - external files' relative path support
