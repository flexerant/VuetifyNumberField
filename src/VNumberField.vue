<template>
  <span>
    <VTextField
      v-if="!editing"
      v-bind="this.$attrs"
      :value="textValue"
      :prefix="prefix"
      :suffix="suffix"
      clear-icon="fas fa-minus-circle"
      type="text"
      @mousedown="toggleEdit(true)"
    />
    <VTextField
      v-if="editing"
      ref="input"
      v-bind="this.$attrs"
      :value="numberValue"
      :prefix="prefix"
      :suffix="suffix"
      :step="step"
      clear-icon="fas fa-minus-circle"
      type="number"
      @blur="toggleEdit(false)"
      @change="handleChange"
      @keyup="handleKeyUp"
    />
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import * as localization from "@/utils/localizations";
import { VTextField } from "vuetify/lib";
import useMethods, { Format } from "./VNumberField.vue.methods";

const methods = useMethods();

export default Vue.extend({
  components: { VTextField },
  props: {
    locale: { type: String, default: "en" },
    value: { type: Number, required: true },
    decimalPlaces: { type: Number, default: 2 },
    step: { type: Number, default: 0.01 },
    min: { type: Number, default: Number.MIN_SAFE_INTEGER },
    max: { type: Number, default: Number.MAX_SAFE_INTEGER },
    format: {
      type: String,
      validator(value) {
        return ["none", "currency", "percent"].indexOf(value) !== -1;
      },
      default: "none",
    },
  },
  data: () => ({
    numberValue: 0,
    editing: false,
  }),
  computed: {
    prefix() {
      return methods.prefix(this.format as Format, this.locale);
    },
    suffix() {
      return methods.suffix(this.format as Format, this.locale);
    },
    textValue() {
      return localization.formatNumber(
        Number(this.numberValue),
        Number(this.decimalPlaces),
        this.locale
      );
    },
  },
  watch: {
    min() {
      this.numberValue = this.adjustNumber(this.value);
      this.$emit("input", this.numberValue);
    },
    max() {
      this.numberValue = this.adjustNumber(this.value);
      this.$emit("input", this.numberValue);
    },
    decimalPlaces() {
      this.numberValue = this.adjustNumber(this.value);
      this.$emit("input", this.numberValue);
    },
    format() {
      this.numberValue = this.adjustNumber(this.value);
    },
  },
  mounted() {
    this.numberValue = this.adjustNumber(this.value);
    this.$emit("input", this.numberValue);
  },
  methods: {
    adjustNumber(num: number) {
      return methods.adjustNumber(num, this.decimalPlaces, this.min, this.max);
    },
    toggleEdit(value: boolean) {
      this.editing = value;
    },
    handleChange(e: string) {
      this.numberValue = this.adjustNumber(Number(e));
      this.$emit("input", this.numberValue);
    },
    handleKeyUp(e: any) {
      const { keyCode } = e;

      if (keyCode === 13) {
        (this.$refs.input as any).blur();
      }
    },
  },
});
</script>

<style></style>
