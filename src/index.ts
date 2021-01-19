import Vue from 'vue';
// import Vuetify from 'vuetify/lib';
import VNumberField from './components/VNumberField.vue';

// Vue.use(Vuetify);

const Components = { VNumberField };

Vue.component('VNumberField', VNumberField);

export { VNumberField };
export default Components;
