import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://fdiwywkqbihsldyoqbhi.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkaXd5d2txYmloc2xkeW9xYmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDczMjc0MDIsImV4cCI6MTk2MjkwMzQwMn0.MLYH-OlXHaytpsj__8J6Z4UZh57MbAQrhU4hPJWO8kc",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
