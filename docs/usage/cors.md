# CORS
* := technique /
  * allows
    * preventing bad action with personal data in websites
  * enforce it by most browsers + JavaScript toolkits
    * -> implications for your API server / supports Swagger
* Check http://www.w3.org/TR/cors
* 👁️cases / NO action is needed 👁️
  * Swagger UI -- is hosted on the same server (host & port) as -- the application itself
  * Application -- is located -- behind a proxy / enables the required CORS headers
* 👁️cases / you need to enable it 👁️
  * Swagger docs / externally `$ref`ed docs
  * `Try it now` button enabled to work
    * -> CORS needs to be enabled on your API endpoints as well.

### Ways to test CORS Support
* There are 3 techniques

  * Curl your API and inspect the headers

    ```bash
    $ curl -I "https://petstore.swagger.io/v2/swagger.json"
    HTTP/1.1 200 OK
    Date: Sat, 31 Jan 2015 23:05:44 GMT
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Methods: GET, POST, DELETE, PUT, PATCH, OPTIONS
    Access-Control-Allow-Headers: Content-Type, api_key, Authorization
    Content-Type: application/json
    Content-Length: 0
    ```
    * supports
      * OPTIONS
      * headers:  `Content-Type`, `api_key`, `Authorization`

  * Try Swagger UI from your file system and look at the debug console
    * If CORS is NOT enabled ->  you'll see something like

      ```
      XMLHttpRequest cannot load http://sad.server.com/v2/api-docs. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
      ```

  * Use the https://www.test-cors.org website
    * Even if `Access-Control-Allow-Headers` is NOT available -> show a successful result
      * 👁️STILL required for Swagger UI 👁️
---

### Enabling CORS
* Way to enable CORS -- depends on --
  * server / host your application
  * framework / host your application
* https://enable-cors.org
  * how to enable CORS | common web servers

---

### CORS and Header Parameters
* Swagger UI 
  * allows 
    * headers
      * -- are sent as -- parameters to requests
      * their names -- *MUST* be supported in -- CORS configuration
      * unique allowed to be sent 
      ```
      Access-Control-Allow-Headers: Content-Type, api_key, Authorization
      ```
