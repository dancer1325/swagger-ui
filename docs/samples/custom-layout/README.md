### Demo of Custom Layout
* includes
  * CSS
  * OAuth configuration

#### How to run locally?
* `npm install`
* `npm start`
  * Problems:
    * Problem1: "Module parse failed: Unexpected token (17:6)You may need an appropriate loader to handle this file type"
      * Attempt1: Add to webpack.config.json, ".jsx" in resolve.extensions
      * Solution: `npm add babel-loader --save-dev` & module.rules for '.jsx' ib webpack.config.js
    * Problem2: "Support for the experimental syntax 'jsx' isn't currently enabled (17:7): Ad @babel/preset-react"
      * Solution: `npm add @babel/core @babel/core --save-dev` and create .babelrc
    * Problem3: Run fine, but NO content displayed
      * Solution: TODO:
* Open in your desired browser -- "http://localhost:8080"
  * Check that OpenAPI specification in "swagger-config.yaml" is displayed
