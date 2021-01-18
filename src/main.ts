import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  components: { App },
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
