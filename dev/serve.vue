<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer />

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-select
              v-model="locale"
              :items="locales"
              label="Locale"
              @change="handleLocaleChange"
            />
          </v-col>
          <v-col>
            <v-select v-model="format" :items="formats" label="Format" />
          </v-col>
          <v-col>
            <v-text-field
              v-model.number="min"
              label="Min value"
              type="number"
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model.number="max"
              label="Max value"
              type="number"
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model.number="decimalPlaces"
              label="Decimal places"
              type="number"
            />
          </v-col>
          <v-col>
            <v-text-field v-model.number="step" label="Step" type="number" />
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="8" offset="2">
            <v-number-field
              v-model="number"
              :format="format"
              :min="min"
              :max="max"
              :decimal-places="decimalPlaces"
              :step="step"
              :locale="locale"
              label="Enter number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8" offset="2"> Bound value: {{ number }} </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import VNumberField from "@/v-number-field.vue";

export default Vue.extend({
  name: "App",

  components: {
    "v-number-field": VNumberField,
  },

  data: () => ({
    step: 0.01,
    min: 10,
    max: 5000,
    number: 1,
    decimalPlaces: 2,
    locales: ["en-CA", "en-US", "fr-CA", "de"],
    locale: "en-CA",
    formats: ["none", "currency", "percent"],
    format: "none",
  }),
  methods: {
    handleLocaleChange() {
      this.$vuetify.lang.current = this.locale;
    },
  },
});
</script>
