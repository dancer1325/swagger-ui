# Configuration

### How to configure

* allowed locations / place Swagger UI configuration parameters (from lowest to highest precedence)
  * configuration object -- passed as an -- argument to Swagger UI (`SwaggerUI({ ... })`)
  * configuration document -- fetched from -- specified `configUrl`
  * configuration items -- passed as -- key/value pairs in the URL query string
---

### Parameters

* if parameters / names with '.' ->
  * single strings
    * != nested structure
  * uses
    * organize subordinate parameters 
* grouped by category
* sorted alphabetically
* type notations
  * `String=""` means a String type with a default value of `""`
  * `String=["a"*, "b", "c", "d"]`
    * == String type /
      * allowed
        * `a`, `b`, `c`, or `d`
      * `a` is the default 
        * Reason: 🧠 due to `*` 🧠 

##### Core

Parameter name | Docker variable | Description
--- | --- | ------
<a name="configUrl"></a>`configUrl` | `CONFIG_URL` | - `String` <br> - := URL -- to fetch -- external configuration document from.
<a name="dom_id"></a>`dom_id` | `DOM_ID` | - `String` <br> - if `domNode` is NOT provided -> **REQUIRED** <br> - := ID of a DOM element on which `SwaggerUI` -- will put -- its user interface.
<a name="domNode"></a>`domNode` | _Unavailable_ | - `Element` <br> - if `dom_id` is not provided ->  **REQUIRED** <br> - := HTML DOM element on which `SwaggerUI` -- will put -- its user interface <br> - Overrides `dom_id`
<a name="spec"></a>`spec` | `SPEC` | - `Object={}` <br> - := JS object / describe the OpenAPI definition <br> - if it's used ->  `url` parameter will NOT be parsed <br> - Use : testing manually-generated definitions / NO hosting them.
<a name="url"></a>`url` | `URL` | - `String` <br> - := URL / -- pointing to -- API definition (normally `swagger.json` or `swagger.yaml`) <br> - if `urls` or `spec` is used -> will be ignored
<a name="urls"></a>`urls` | `URLS` | - `Array` <br> - := array of API definition objects ( -- _Example:_ `[{url: "<url1>", name: "<name1>"},{url: "<url2>", name: "<name2>"}]`--) <br> - Use: Topbar plugin <br> - if you use it & Topbar plugin is enabled -> `url` parameter will NOT be parsed <br> - Names and URLs must be unique among all items in this array -- Reason: 🧠 they're used as identifiers 🧠 --
<a name="urls.primaryName"></a>`urls.primaryName` | `URLS_PRIMARY_NAME` | - `String`<br> - Requirements: use `urls` <br> - If the value -- matches the -- name of a spec / provided in `urls`, -> that spec will be displayed when Swagger UI loads -- instead of defaulting to the first spec in `urls` --
<a name="queryConfigEnabled"></a>`queryConfigEnabled` | `QUERY_CONFIG_ENABLED` | - `Boolean=false` <br> - Enables overriding configuration parameters -- via -- URL search params.  

##### Plugin system

* Check more in  [Customization documentation](/docs/customization/overview.md).

Parameter name | Docker variable | Description
--- | --- | -----
<a name="layout"></a>`layout` | _Unavailable_ | - `String="BaseLayout"` <br> - :=componentName / <br> &nbsp; &nbsp; available via the plugin system <br> &nbsp; &nbsp; Use: top-level layout for Swagger UI.
<a name="plugins"></a>`plugins` | _Unavailable_ | - `Array=[]` <br> - := array of plugin functions / use in Swagger UI.
<a name="presets"></a>`presets` | _Unavailable_ | - `Array=[SwaggerUI.presets.ApisPreset]` <br> - := array of presets / use in Swagger UI <br> - if you use it -> you'll want to include `ApisPreset`


##### Display
TODO:
<table role="table">
    <thead>
    <tr>
        <th>Parameter name</th>
        <th>Docker variable</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><a name="user-content-deeplinking"></a><code>deepLinking</code></td>
        <td><code>DEEP_LINKING</code></td>
        <td><code>Boolean=false</code>. If set to <code>true</code>, enables
            deep linking for tags and operations. See the <a
                    href="/docs/usage/deep-linking.md">Deep Linking
                documentation</a> for more information.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-displayoperationid"></a><code>displayOperationId</code>
        </td>
        <td><code>DISPLAY_OPERATION_ID</code></td>
        <td><code>Boolean=false</code>. Controls the display of operationId in
            operations list. The default is <code>false</code>.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-defaultmodelsexpanddepth"></a><code>defaultModelsExpandDepth</code>
        </td>
        <td><code>DEFAULT_MODELS_EXPAND_DEPTH</code></td>
        <td><code>Number=1</code>. The default expansion depth for models (set
            to -1 completely hide the models).
        </td>
    </tr>
    <tr>
        <td><a name="user-content-defaultmodelexpanddepth"></a><code>defaultModelExpandDepth</code>
        </td>
        <td><code>DEFAULT_MODEL_EXPAND_DEPTH</code></td>
        <td><code>Number=1</code>. The default expansion depth for the model on
            the model-example section.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-defaultmodelrendering"></a><code>defaultModelRendering</code>
        </td>
        <td><code>DEFAULT_MODEL_RENDERING</code></td>
        <td><code>String=["example"*, "model"]</code>. Controls how the model is
            shown when the API is first rendered. (The user can always switch
            the rendering for a given model by clicking the 'Model' and 'Example
            Value' links.)
        </td>
    </tr>
    <tr>
        <td><a name="user-content-displayrequestduration"></a><code>displayRequestDuration</code>
        </td>
        <td><code>DISPLAY_REQUEST_DURATION</code></td>
        <td><code>Boolean=false</code>. Controls the display of the request
            duration (in milliseconds) for "Try it out" requests.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-docexpansion"></a><code>docExpansion</code>
        </td>
        <td><code>DOC_EXPANSION</code></td>
        <td><code>String=["list"*, "full", "none"]</code>. Controls the default
            expansion setting for the operations and tags. It can be 'list'
            (expands only the tags), 'full' (expands the tags and operations) or
            'none' (expands nothing).
        </td>
    </tr>
    <tr>
        <td><a name="user-content-filter"></a><code>filter</code></td>
        <td><code>FILTER</code></td>
        <td><code>Boolean=false OR String</code>. If set, enables filtering. The
            top bar will show an edit box that you can use to filter the tagged
            operations that are shown. Can be Boolean to enable or disable, or a
            string, in which case filtering will be enabled using that string as
            the filter expression. Filtering is case sensitive matching the
            filter expression anywhere inside the tag.
        </td>
    </tr>
    <tr>
        <td>
            <a name="user-content-maxdisplayedtags"></a><code>maxDisplayedTags</code>
        </td>
        <td><code>MAX_DISPLAYED_TAGS</code></td>
        <td><code>Number</code>. If set, limits the number of tagged operations
            displayed to at most this many. The default is to show all
            operations.
        </td>
    </tr>
    <tr>
        <td>
            <a name="user-content-operationssorter"></a><code>operationsSorter</code>
        </td>
        <td><em>Unavailable</em></td>
        <td><code>Function=(a =&gt; a)</code>. Apply a sort to the operation
            list of each API. It can be 'alpha' (sort by paths
            alphanumerically), 'method' (sort by HTTP method) or a function (see
            Array.prototype.sort() to know how sort function works). Default is
            the order returned by the server unchanged.
        </td>
    </tr>
    <tr>
        <td>
            <a name="user-content-showextensions"></a><code>showExtensions</code>
        </td>
        <td><code>SHOW_EXTENSIONS</code></td>
        <td><code>Boolean=false</code>. Controls the display of vendor extension
            (<code>x-</code>) fields and values for Operations, Parameters,
            Responses, and Schema.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-showcommonextensions"></a><code>showCommonExtensions</code>
        </td>
        <td><code>SHOW_COMMON_EXTENSIONS</code></td>
        <td><code>Boolean=false</code>. Controls the display of extensions
            (<code>pattern</code>, <code>maxLength</code>,
            <code>minLength</code>, <code>maximum</code>, <code>minimum</code>)
            fields and values for Parameters.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-tagsorter"></a><code>tagsSorter</code></td>
        <td><em>Unavailable</em></td>
        <td><code>Function=(a =&gt; a)</code>. Apply a sort to the tag list of
            each API. It can be 'alpha' (sort by paths alphanumerically) or a
            function (see <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
                    rel="nofollow">Array.prototype.sort()</a> to learn how to
            write a sort function). Two tag name strings are passed to the
            sorter for each pass. Default is the order determined by Swagger UI.
        </td>
    </tr>
    <tr>
        <td>
            <a name="user-content-useunsafemarkdown"></a><code>useUnsafeMarkdown</code>
        </td>
        <td><code>USE_UNSAFE_MARKDOWN</code></td>
        <td><code>Boolean=false</code>. When enabled, sanitizer will leave
            <code>style</code>, <code>class</code> and <code>data-*</code>
            attributes untouched on all HTML Elements declared inside markdown
            strings. This parameter is <strong>Deprecated</strong> and will be
            removed in <code>4.0.0</code>.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-oncomplete"></a><code>onComplete</code></td>
        <td><em>Unavailable</em></td>
        <td><code>Function=NOOP</code>. Provides a mechanism to be notified when
            Swagger UI has finished rendering a newly provided definition.
        </td>
    </tr>
    <tr>
        <td>
            <a name="user-content-syntaxhighlight"></a><code>syntaxHighlight</code>
        </td>
        <td><em>Unavailable</em></td>
        <td>Set to <code>false</code> to deactivate syntax highlighting of
            payloads and cURL command, can be otherwise an object with the
            <code>activated</code> and <code>theme</code> properties.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-syntaxhighlight.activated"></a><code>syntaxHighlight.activated</code>
        </td>
        <td><em>Unavailable</em></td>
        <td><code>Boolean=true</code>. Whether syntax highlighting should be
            activated or not.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-syntaxhighlight.theme"></a><code>syntaxHighlight.theme</code>
        </td>
        <td><em>Unavailable</em></td>
        <td><code>String=["agate"*, "arta", "monokai", "nord", "obsidian",
            "tomorrow-night", "idea"]</code>. <a
                href="https://highlightjs.org/static/demo/" rel="nofollow">Highlight.js</a>
            syntax coloring theme to use. (Only these 7 styles are available.)
        </td>
    </tr>
    <tr>
        <td>
            <a name="user-content-tryitoutenabled"></a><code>tryItOutEnabled</code>
        </td>
        <td><code>TRY_IT_OUT_ENABLED</code></td>
        <td><code>Boolean=false</code>. Controls whether the "Try it out"
            section should be enabled by default.
        </td>
    </tr>
    <tr>
        <td><a name="user-content-requestsnippetsenabled"></a><code>requestSnippetsEnabled</code>
        </td>
        <td><em>Unavailable</em></td>
        <td><code>Boolean=false</code>. Enables the request snippet section.
            When disabled, the legacy curl snippet will be used.
        </td>
    </tr>
    <tr>
        <td>
            <a name="user-content-requestsnippets"></a><code>requestSnippets</code>
        </td>
        <td><em>Unavailable</em></td>
        <td>
<pre lang="javascript">
<code>Object={
  generators: {
    curl_bash: {
      title: "cURL (bash)",
      syntax: "bash"
    },
    curl_powershell: {
      title: "cURL (PowerShell)",
      syntax: "powershell"
    },
    curl_cmd: {
      title: "cURL (CMD)",
      syntax: "bash"
    },
  },
  defaultExpanded: true,
  languages: null, 
  // e.g. only show curl bash = ["curl_bash"]
}
</code>
</pre>
            This is the default configuration section for the
            requestSnippets plugin.
        </td>
    </tr>
    </tbody>
</table>

##### Network

Parameter name | Docker variable | Description
--- | --- | -----
<a name="oauth2RedirectUrl"></a>`oauth2RedirectUrl` | `OAUTH2_REDIRECT_URL` | `String`. OAuth redirect URL.
<a name="requestInterceptor"></a>`requestInterceptor` | _Unavailable_ | `Function=(a => a)`. MUST be a function.  Function to intercept remote definition, "Try it out", and OAuth 2.0 requests.  Accepts one argument requestInterceptor(request) and must return the modified request, or a Promise that resolves to the modified request.
<a name="request.curlOptions"></a>`request.curlOptions` | _Unavailable_ | `Array`.  If set, MUST be an array of command line options available to the `curl` command.  This can be set on the mutated request in the `requestInterceptor` function. For example `request.curlOptions = ["-g", "--limit-rate 20k"]`
<a name="responseInterceptor"></a>`responseInterceptor` | _Unavailable_ | `Function=(a => a)`. MUST be a function.  Function to intercept remote definition, "Try it out", and OAuth 2.0 responses.  Accepts one argument responseInterceptor(response) and must return the modified response, or a Promise that resolves to the modified response.
<a name="showMutatedRequest"></a>`showMutatedRequest` | `SHOW_MUTATED_REQUEST` | `Boolean=true`. If set to `true`, uses the mutated request returned from a requestInterceptor to produce the curl command in the UI, otherwise the request before the requestInterceptor was applied is used.
<a name="supportedSubmitMethods"></a>`supportedSubmitMethods` | `SUPPORTED_SUBMIT_METHODS` | `Array=["get", "put", "post", "delete", "options", "head", "patch", "trace"]`. List of HTTP methods that have the "Try it out" feature enabled. An empty array disables "Try it out" for all operations. This does not filter the operations from the display.
<a name="validatorUrl"></a>`validatorUrl` | `VALIDATOR_URL` | `String="https://validator.swagger.io/validator" OR null`. By default, Swagger UI attempts to validate specs against swagger.io's online validator. You can use this parameter to set a different validator URL, for example for locally deployed validators ([Validator Badge](https://github.com/swagger-api/validator-badge)). Setting it to either `none`, `127.0.0.1` or `localhost` will disable validation.
<a name="withCredentials"></a>`withCredentials` | `WITH_CREDENTIALS` | `Boolean=false` If set to `true`, enables passing credentials, [as defined in the Fetch standard](https://fetch.spec.whatwg.org/#credentials), in CORS requests that are sent by the browser. Note that Swagger UI cannot currently set cookies cross-domain (see [swagger-js#1163](https://github.com/swagger-api/swagger-js/issues/1163)) - as a result, you will have to rely on browser-supplied cookies (which this setting enables sending) that Swagger UI cannot control.

##### Macros

Parameter name | Docker variable | Description
--- | --- | -----
<a name="modelPropertyMacro"></a>`modelPropertyMacro` | _Unavailable_ | `Function`. Function to set default values to each property in model. Accepts one argument modelPropertyMacro(property), property is immutable
<a name="parameterMacro"></a>`parameterMacro` | _Unavailable_ | `Function`. Function to set default value to parameters. Accepts two arguments parameterMacro(operation, parameter). Operation and parameter are objects passed for context, both remain immutable

##### Authorization

Parameter name | Docker variable | Description
--- | --- | -----
<a name="persistAuthorization"></a>`persistAuthorization` | `PERSIST_AUTHORIZATION` | `Boolean=false`. If set to `true`, it persists authorization data and it would not be lost on browser close/refresh
---

### Instance methods

**💡 Take note! These are methods, not parameters**.

Method name | Docker variable | Description
--- | --- | -----
<a name="initOAuth"></a>`initOAuth` | [_See `oauth2.md`_](./oauth2.md) | `(configObj) => void`. Provide Swagger UI with information about your OAuth server - see the [OAuth 2.0 documentation](./oauth2.md) for more information.
<a name="preauthorizeBasic"></a>`preauthorizeBasic` | _Unavailable_ | `(authDefinitionKey, username, password) => action`. Programmatically set values for a Basic authorization scheme.
<a name="preauthorizeApiKey"></a>`preauthorizeApiKey` | _Unavailable_ | `(authDefinitionKey, apiKeyValue) => action`. Programmatically set values for an API key or Bearer authorization scheme. In case of OpenAPI 3.0 Bearer scheme, `apiKeyValue` must contain just the token itself without the `Bearer` prefix.
---

### Docker
* Most of these options -- can be controlled with -- environment variables
  * if available -> 1 environment variable / parameter

##### String variables
* `ENVIRONMENT_VARIABLE="desiredValue"`
  * `\` for escaping characters
* _Example:_

  ```sh
  FILTER="myFilterValue"
  LAYOUT="BaseLayout"
  ```

##### Boolean variables
* `ENVIRONMENT_VARIABLE="trueOrFalse"`
  * `\` for escaping characters
* _Example:_

  ```sh
  DISPLAY_OPERATION_ID="true"
  DEEP_LINKING="false"
  ```

##### Number variables
* `ENVIRONMENT_VARIABLE="number"`
  * `\` for escaping characters
* _Example:_

  ```sh
  DEFAULT_MODELS_EXPAND_DEPTH="5"
  DEFAULT_MODEL_EXPAND_DEPTH="7"
  ```

##### Array variables
* `ENVIRONMENT_VARIABLE="[items]"`
  * `\` for escaping characters
* _Example:_

  ```sh
  SUPPORTED_SUBMIT_METHODS="[\"get\", \"post\"]"
  URLS="[ { url: \"https://petstore.swagger.io/v2/swagger.json\", name: \"Petstore\" } ]"
  ```

##### Object variables
* `ENVIRONMENT_VARIABLE="{objectProperties}"`
  * `\` for escaping characters
* _Example:_

  ```sh
  SPEC="{ \"openapi\": \"3.0.0\" }"
  ```
---

### Docker-Compose

#### .env file example encoding
* ❓
  ```sh
  SUPPORTED_SUBMIT_METHODS=['get', 'post']
  URLS=[ { url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petstore' } ]
  ```
