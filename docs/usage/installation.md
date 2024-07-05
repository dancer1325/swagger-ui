# Installation

## Distribution channels

### NPM Registry
* 3 modules to npm -- Check main 'README.md' --
  * **`swagger-ui`**
    * use
      * JS web projects / -- include -- module bundlers (Webpack, Browserify, and Rollup)
    * Its main file -- exports -- Swagger UI's main function
    * namespaced stylesheet at `swagger-ui/dist/swagger-ui.css`
    * Check [Webpack Getting Started](../samples/webpack-getting-started)
    * _Example:_
      ```javascript
      import SwaggerUI from 'swagger-ui'
      // or use require if you prefer
      const SwaggerUI = require('swagger-ui')
      
      SwaggerUI({
        dom_id: '#myDomId'
      })
      ```    
  * **`swagger-ui-dist`**
    * once you import it -> includes 
      * `absolutePath` helper function / returns the absolute filesystem path to where this module is installed
      * mirror of the `dist` folder | this Git repository
      * `swagger-ui-bundle.js`
        * := build of Swagger UI / -- includes -- ALL code, needed to run in 1 file
      * `index.html` makes easy to serve Swagger UI 
      * `SwaggerUIBundle` (== `SwaggerUI`) and `SwaggerUIStandalonePreset`
        * use
          * JS project / can NOT handle a traditional npm module
        * _Example:_

          ```js
          var SwaggerUIBundle = require('swagger-ui-dist').SwaggerUIBundle
    
          const ui = SwaggerUIBundle({
            url: "https://petstore.swagger.io/v2/swagger.json",
            dom_id: '#swagger-ui',
            presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIBundle.SwaggerUIStandalonePreset
            ],
           layout: "StandaloneLayout"
          })
          ```

    * _Example:_

    ```javascript
    const express = require('express')
    const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
    
    const app = express()
    
    app.use(express.static(pathToSwaggerUi))
    
    app.listen(3000)
    ```

  * **`swagger-ui-react`**

### Docker
* There is pre-built docker image of the swagger-ui in Docker Hub

  ```sh
  docker pull swaggerapi/swagger-ui
  docker run -p 80:8080 swaggerapi/swagger-ui
  ```

  * nginx server / Swagger UI on port 80
    * Problems:
      * Problem1: No content displayed in `localhost:8080/`
        * Attempt1: 'localhost:80'
        * Attempt2: 'http://localhost/swagger-ui/index.html'
        * Solution: TODO:
  * allows
    * providing your own swagger.json on your host
      ```sh
      docker run -p 80:8080 -e SWAGGER_JSON=/foo/swagger.json -v /bar:/foo swaggerapi/swagger-ui
      ```
      * Problems:
        * Problem1: No content displayed in `localhost:8080/`
          * Solution: TODO:
    * -- providing a URL to -- swagger.json on an external host:
      ```sh
      docker run -p 80:8080 -e SWAGGER_JSON_URL=https://petstore3.swagger.io/api/v3/openapi.json swaggerapi/swagger-ui
      ```
      * Problems:
        * Problem1: No content displayed in `localhost:8080/`
        * Solution: TODO:
    * changing base URL of the web application -- `BASE_URL` --

      ```sh
      docker run -p 80:8080 -e BASE_URL=/swagger -e SWAGGER_JSON=/foo/swagger.json -v /bar:/foo swaggerapi/swagger-ui
      ```
      * Problems:
        * Problem1: No content displayed in `localhost:8080/swagger` 
        * Solution: TODO:
    * changing the port -- `PORT` --

      ```sh
      docker run -p 80:80 -e PORT=80 swaggerapi/swagger-ui
      ```

      * Problems:
        * Problem1: No content displayed in `localhost:80/`
        * Solution: TODO:
    * specifying an IPv6 port -- `PORT_IPV6` --
      * by default, IPv6 port is NOT set

      ```sh
      docker run -p 80:80 -e PORT_IPV6=8080 swaggerapi/swagger-ui
      ```
       
      * Should I see some difference ❓
    * allow/disallow [embedding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) -- `EMBEDDING` --
      * by default, embedding is disabled

      ```sh
      docker run -p 80:80 -e EMBEDDING=true swaggerapi/swagger-ui
      ```
      * Should I see some difference ❓Or how to test it?
    * For more, check [Configuration documentation](configuration.md#docker).

### unpkg

You can embed Swagger UI's code directly in your HTML by using [unpkg's](https://unpkg.com/) interface:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="SwaggerUI" />
  <title>SwaggerUI</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" />
</head>
<body>
<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js" crossorigin></script>
<script>
  window.onload = () => {
    window.ui = SwaggerUIBundle({
      url: 'https://petstore3.swagger.io/api/v3/openapi.json',
      dom_id: '#swagger-ui',
    });
  };
</script>
</body>
</html>
```

Using `StandalonePreset` will render `TopBar` and `ValidatorBadge` as well.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="SwaggerUI" />
    <title>SwaggerUI</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" />
  </head>
  <body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js" crossorigin></script>
  <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js" crossorigin></script>
  <script>
    window.onload = () => {
      window.ui = SwaggerUIBundle({
        url: 'https://petstore3.swagger.io/api/v3/openapi.json',
        dom_id: '#swagger-ui',
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        layout: "StandaloneLayout",
      });
    };
  </script>
  </body>
</html>
```

See [unpkg's main page](https://unpkg.com/) for more information on how to use unpkg.

### Static files without HTTP or HTML

Once swagger-ui has successfully generated the `/dist` directory, you can copy this to your own file system and host from there.

## Plain old HTML/CSS/JS (Standalone)

The folder `/dist` includes all the HTML, CSS and JS files needed to run SwaggerUI on a static website or CMS, without requiring NPM.

1. Download the [latest release](https://github.com/swagger-api/swagger-ui/releases/latest).
1. Copy the contents of the `/dist` folder to your server.
1. Open `swagger-initializer.js` in your text editor and replace "https://petstore.swagger.io/v2/swagger.json" with the URL for your OpenAPI 3.0 spec.


