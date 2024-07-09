import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./swagger-config.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: "#swagger",

  /*docExpansion: "full", "list" OR "none" */
  // docExpansion: "full" -- default one --,
  //docExpansion: "list"
  docExpansion: "none",

  // operationsSorter     if you do NOT specify == default one
  //operationsSorter:"alpha"
  operationsSorter:"method"
})

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  // See https://demo.identityserver.io/ for configuration details.
  clientId: "implicit"
})
