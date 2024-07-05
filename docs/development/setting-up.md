# Setting up a dev environment
* Development server is included /
  * hot module reloading

### Prerequisites

- git, any version
- **Node.js >=20.3.0** and **npm >=9.6.7**

### Steps

1. `git clone https://github.com/swagger-api/swagger-ui.git`
2. `cd swagger-ui`
3. `npm install`
4. `npm run dev`
5. Wait a bit
6. Open http://localhost:3200/

### Using your own local api definition with local dev build
* specify a local file in `dev-helpers` -- directly here or subdirectory -- 
  * Recommendation: 👁 create a subdirectory 👁️-- _Example:_ `dev-helpers/examples` --
  * 👁 NOT commit to git 👁
* change the `url` parameter
  ```
  # url: "https://petstore.swagger.io/v2/swagger.json",   # It's going to be replaced by the next one
  url: "./examples/your-local-api-definition.yaml",
  ```

## Bonus points
* Swagger UI includes an ESLint rule
  * Recommendation: install an ESLint plugin
