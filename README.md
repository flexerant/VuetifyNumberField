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

A numeric field component built from [Vuetify's](https://vuetifyjs.com/en/) [`v-text-field`](https://vuetifyjs.com/en/components/text-fields/) component.


## Installation

### Global

Importing the source `.vue` file (note: The [`numeral`](https://www.npmjs.com/package/numeral) package may also need to be installed):

```js
// main.js
import VNumberField from 'flexerant-vuetify-number-field/src/components/VNumberField';

Vue.use(VNumberField);
```

Importing the bundled `.js`:

```js
// main.js
import { VNumberField } from 'flexerant-vuetify-number-field';

Vue.use(VNumberField);
```

### In-Component Import

Importing the source `.vue` file (note: The [`numeral`](https://www.npmjs.com/package/numeral) package may also need to be installed):


```js
// component.vue
import VNumberField from "flexerant-vuetify-number-field/src/components/VNumberField";

export default {
  components: {
    VNumberField
  }
}
```

Importing the bundled `.js`:

```js
// component.vue
import { VNumberField } from "flexerant-vuetify-number-field";

export default {
  components: {
    VNumberField
  }
}
```

## Usage

The component uses Vuetify's `text-field` [API](https://vuetifyjs.com/en/components/text-fields/#api), therfore the same props, slots, events, and functions can be used.

```html

<v-number-field /> 

```

Additional props are listed below;

| Name             | Description                                                           | Type                              | Default                 |
| ---              | ---                                                                   | ---                               | ---                     |
| `format`         | Prepends/appends the appropriate symbol based on the selected locale. | 'none' \| 'currency' \| 'percent' | 'none'                  |
| `min`            | The minimum allowed value. Values below it will be discarded.         | number                            | Number.MIN_SAFE_INTEGER |
| `max`            | The maximum allowed value. Values above it will be discarded.         | number                            | Number.MAX_SAFE_INTEGER |
| `decimal-places` | The number of decimal places to display. Applies to the model also.   | number                            | 2                       |
| `step`           | The step used when increment/decrement buttons are clicked.           | number                            | 0.1                     |
| `locale`         | The locale used for the currency and percent symbols.                 | number                            | 'en'                    |

Any locale supported by [`numeral`](https://www.npmjs.com/package/numeral) can be used.
