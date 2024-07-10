import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';    // Important to import the Swagger UI styles

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
  operationsSorter:"method",

  // tagsSorter           if you do NOT specify == default one == determined by Swagger UI
  tagsSorter:"alpha",
  //tagsSorter:"functionPendingToAdd"
})

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  // See https://demo.identityserver.io/ for configuration details.
  clientId: "implicit"
})
