# Demo of Swagger UI with Webpack.
* includes
  * CSS
  * OAuth configuration
* `_sample_package.json`
  * placeholder sample

## Configurations put in practice
* `docExpansion`
* `operationsSorter`

## How to run locally?
* `npm install`
* `npm start`
  * Problems:
    * Problem1: "[webpack-cli] Error: For the selected environment is no default script chunk format available:"
      * Solution: Add `output.chunkFormat` and "browserslist"
* Open in your desired browser -- "http://localhost:8080"
  * Check that OpenAPI specification in "swagger-config.yaml" is displayed
