<p float="left">
 <a href="https://www.npmjs.com/package/flexerant-vuetify-number-field" alt="flexerant-vuetify-number-field on npm">
  <img src="https://img.shields.io/npm/v/flexerant-vuetify-number-field" alt="npm version icon"/>
  </a>
</p>

# Vuetify number field

A numeric field component built from [Vuetify's](https://vuetifyjs.com/en/) [`v-text-field`](https://vuetifyjs.com/en/components/text-fields/) component.

## Installation

### Global

Note: The [`numeral`](https://www.npmjs.com/package/numeral) package may also need to be installed.

```js
import Vue from "vue";
import VNumberField from "flexerant-vuetify-number-field";

Vue.use(VNumberField);
Vue.component("v-number-field", VNumberField);
```

### In-Component Import

Note: The [`numeral`](https://www.npmjs.com/package/numeral) package may also need to be installed.

```js
// component.vue
import VNumberField from "flexerant-vuetify-number-field";

export default {
  components: {
    "v-number-field": VNumberField,
  },
};
```

## Usage

The component uses Vuetify's `text-field` [API](https://vuetifyjs.com/en/components/text-fields/#api), therfore the same props, slots, events, and functions can be used.

```html
<v-number-field />
```

Additional props are listed below;

| Name             | Description                                                           | Type                              | Default                 |
| ---------------- | --------------------------------------------------------------------- | --------------------------------- | ----------------------- |
| `format`         | Prepends/appends the appropriate symbol based on the selected locale. | 'none' \| 'currency' \| 'percent' | 'none'                  |
| `min`            | The minimum allowed value. Values below it will be discarded.         | number                            | Number.MIN_SAFE_INTEGER |
| `max`            | The maximum allowed value. Values above it will be discarded.         | number                            | Number.MAX_SAFE_INTEGER |
| `decimal-places` | The number of decimal places to display. Applies to the model also.   | number                            | 2                       |
| `step`           | The step used when increment/decrement buttons are clicked.           | number                            | 0.1                     |
| `locale`         | The locale used for the currency and percent symbols.                 | number                            | 'en'                    |

Any locale supported by [`numeral`](https://www.npmjs.com/package/numeral) can be used.

# Credits

[vue-sfc-rollup](https://www.npmjs.com/package/vue-sfc-rollup)

[dsvanidze/vue-sfc-rollup](https://github.com/dsvanidze/vue-sfc-rollup)
