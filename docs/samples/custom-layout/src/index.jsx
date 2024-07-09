import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';
import React from 'react';

const spec = require('./swagger-config.yaml');

// 1. Create the layout component
class OperationsLayout extends React.Component {
  render() {
    const {
      getComponent
    } = this.props

    const Operations = getComponent("operations", true)

    return (
      <div className="swagger-ui">
        <Operations />
      </div>
    )
  }
}

// 2. Create the plugin / provides our layout component
const OperationsLayoutPlugin = () => {
  return {
    components: {
      OperationsLayout: OperationsLayout
    }
  }
}

const ui = SwaggerUI({
  spec,
  plugins: [ OperationsLayoutPlugin ],
  layout: "OperationsLayout"
})

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  // See https://demo.identityserver.io/ for configuration details.
  clientId: "implicit"
})
