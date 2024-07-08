import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./swagger-config.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: "#swagger",
  /*docExpansion: "full", "list" OR "none" */
  // docExpansion: "full" -- default one --,
  //docExpansion: "list"
  docExpansion: "none"
  /*layout: ""*/
})

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  // See https://demo.identityserver.io/ for configuration details.
  clientId: "implicit"
})
