# How to install?

## -- via -- distribution channels

### NPM Registry
* `swagger-ui`
  * _Example:_ [here](../samples/swagger-ui-webpack-getting-started)
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
      docker run -p 80:8080 -e SWAGGER_JSON=simpleopenapi.json -v /bar:/foo swaggerapi/swagger-ui
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
      docker run -p 80:8080 -e BASE_URL=/swagger -e SWAGGER_JSON=simpleopenapi.json -v /bar:/foo swaggerapi/swagger-ui
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

### [unpkg](https://unpkg.com/)

* unpkg
  * == interface
  * allows
    * embedding Swagger UI's code | your HTML

* _Example:_
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

* `StandalonePreset`
  * ALSO render `TopBar` & `ValidatorBadge`
  * _Example:_
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

### Static files -- WITHOUT -- HTTP or HTML

* steps
  * swagger-ui generates `dist/`
  * copy `dist/` & place | your OWN file system

## -- via --Plain old HTML/CSS/JS (Standalone)

* == ❌NO need of NPM ❌
* `/dist`
  * == ALL HTML + CSS + JS files /
    * allows
      * run SwaggerUI | static website or CMS

* steps
  1. download [swagger UI release](https://github.com/swagger-api/swagger-ui/releases/latest)
  2. copy `/dist` | your server
  3. | `swagger-initializer.js`
     1. replace "https://petstore.swagger.io/v2/swagger.json" -- with your -- OpenAPI 3.0 spec's URL
