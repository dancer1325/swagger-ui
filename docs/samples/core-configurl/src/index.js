import SwaggerUI from "swagger-ui"
import 'swagger-ui/dist/swagger-ui.css'

//const spec = require('./swagger-config.yaml');

SwaggerUI({
  configUrl: "https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml",
  //spec,
  dom_id: "#swagger",
})
