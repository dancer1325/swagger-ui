# Creating a custom layout
* Layout
  * := special type of component /
  * use
    * root component for the entire application 
    * high-level control over what ends up on the page
  * `BaseLayout`
    * == default, built-in
  * `layout:"anotherLayout"`
    * syntax to specify a different layout -- Check '../usage/configuration.md' --
    * _Example:_ create a custom layout / only displayed operations -- TODO: real code --

    ```js
    import React from "react"
    
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
    
    // 3. Provide the plugin to Swagger-UI, select OperationsLayout
    SwaggerUI({
      url: "https://petstore.swagger.io/v2/swagger.json",
      plugins: [ OperationsLayoutPlugin ],
      layout: "OperationsLayout"
    })
    ```

# Extend BaseLayout
* _Example:_  -- TODO: real code --
```js
import React from "react"

// Create the layout component
class AugmentingLayout extends React.Component {
  render() {
    const {
      getComponent
    } = this.props

    const BaseLayout = getComponent("BaseLayout", true)

    return (
      <div>
        <div className="myCustomHeader">
          <h1>I have a custom header above Swagger-UI!</h1>
        </div>
        <BaseLayout />
      </div>
    )
  }
}

// Create the plugin that provides our layout component
const AugmentingLayoutPlugin = () => {
  return {
    components: {
      AugmentingLayout: AugmentingLayout
    }
  }
}

// Provide the plugin to Swagger-UI, and select AugmentingLayout
// as the layout for Swagger-UI
SwaggerUI({
  url: "https://petstore.swagger.io/v2/swagger.json",
  plugins: [ AugmentingLayoutPlugin ],
  layout: "AugmentingLayout"
})
```
