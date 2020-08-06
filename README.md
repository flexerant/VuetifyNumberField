<!-- <p float="left">
    <img src="https://cdn.auth0.com/blog/vuejs/vue-logo.png" alt="Vue.js" width="100"/>
    <img src="https://www.saashub.com/images/app/service_logos/8/20ef90d04b35/large.png?1527741609" alt="Vuetify.js" width="100"/>
    <img src="https://opencollective-production.s3-us-west-1.amazonaws.com/011fc620-4cb2-11e9-a51a-fdbb10b4cabb.png" alt="Storybook" width="100"/>
</p> -->

# Vuetify number field

<!-- ![GitHub issues](https://img.shields.io/github/issues/mitevpi/vuetify-component-lib-template)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/mitevpi/vuetify-component-lib-template)
![GitHub contributors](https://img.shields.io/github/contributors/mitevpi/vuetify-component-lib-template)

![GitHub last commit](https://img.shields.io/github/last-commit/mitevpi/vuetify-component-lib-template)
![GitHub Release Date](https://img.shields.io/github/release-date/mitevpi/vuetify-component-lib-template)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/mitevpi/vuetify-component-lib-template)
![GitHub repo size](https://img.shields.io/github/repo-size/mitevpi/vuetify-component-lib-template)
![GitHub](https://img.shields.io/github/license/mitevpi/vuetify-component-lib-template) -->

A numeric field component built from [Vuetify's](https://vuetifyjs.com/en/) [text field](https://vuetifyjs.com/en/components/text-fields/) component.

## Usage

## How to Import (The Built Library)

### Importing Components

#### Global

Importing the single file .vue components directly. (If using Vue CLI 3 with Babel or TypeScript, it's recommended that you import its src directory. This will minimize the size of your application by preventing duplicate or unnecessary polyfills.)

Importing the source `.vue` file:

```js
// main.js
import VNumberField from 'flexerant-vuetify-number-field/src/components';
Vue.use(VNumberField);
```

Importing the bundled `.js`:

```js
// main.js
import VNumberField from 'flexerant-vuetify-number-field';
Vue.use(VNumberField);
```

#### In-Component Import

For single use in a component or small set of components.

Importing the source `.vue` file:

```js
// component.vue
import VNumberField from "flexerant-vuetify-number-field/src/components/VNumberField";

export default {
  name: "Tester",
  components: {
    VNumberField
  }
}
</script>
```

Importing the bundled `.js` components individually.

```js
// component.vue
import { VNumberField } from "flexerant-vuetify-number-field";

export default {
  name: "Tester",
  components: {
    VNumberField
  }
}
</script>
```
### Components

Components can be found in the [src/components](src/components) folder
in the root directory of this repository.

## Developer Documentation

### Building

In order to contribute to this project, fork/clone this repository
locally. After cloning is completed, install the dependencies using `npm i`.

#### Preview

You can start a development server by running the commands below in the
root directory of this repository. Once the development server is
running, view localhost:8080 using Chrome and
[Vue.js Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).
This is a preview application and will allow you to visualize the
components/styles that will ultimately be compiled to the design system
library.

```cmd
npm run serve
```

#### Library

To build the project as a library, run `npm run build` in the root directory of the repository.

## Commands

The following commands are used to develop the project:

1. `npm run build` - Build the package distribution bundle.
2. `npm run serve` - Start a development server with live-reloading on
   changes. (Used for previewing individual components.)
3. `npm run lint` - Lint code using ESLint and Vue, AirBnB, and Prettier configs.
4. `npm test` - Run unit tests for the individual components in the package.
5. `npm run release` - Runs tests, build, and version incrementing
   procedures.
