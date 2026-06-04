# AngularJS Phone Catalog Tutorial Application


## Overview

Simple application, build with AngularJS, to display and manage users, with jsonplaceholder fake API used as the backend. The application was build 
by following the tutorial at https://docs.angularjs.org/tutorial.


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`

### Installing Dependencies

The application relies upon AngularJS library, and Node.js tools. You can install these by running:

```
npm install
```

This will also download the AngularJS files needed for the current step of the tutorial and copy
them to `app/lib`.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application
  running.


## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  lib/...                --> 3rd party JS/CSS libraries, including AngularJS and jQuery (copied over from `node_modules/`)
  about/...              --> files for the `about` module, including JS source code, HTML templates
  user-list/...          --> files for the `userList` module, including JS source code, HTML templates
    components           --> files for the `userList` module, components used in the app modal component as a slot 
  shared                 --> Components, directives, services and other modules used across the application
    components           --> Components, used across the application
    directives           --> Directives, used across the application
    services             --> Services, used across the application
    interceptors         --> HTTP response interceptor used for logging http response errors
    httpClient           --> Used in services as a facade for executing requests to APIs with angular $http module
  app.router.js          --> app-wide configuration of AngularJS routing
  app.css                --> default stylesheet
  app.module.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

node_modules/...         --> 3rd party libraries and development tools (fetched using `npm`)

package.json             --> Node.js specific metadata, including development tools dependencies
package-lock.json        --> Npm specific metadata, including versions of installed development tools dependencies
```

## Contact

For more information on AngularJS, please check out https://angularjs.org/.

[git-home]: https://git-scm.com/
[git-setup]: https://help.github.com/articles/set-up-git
[node]: https://nodejs.org/
