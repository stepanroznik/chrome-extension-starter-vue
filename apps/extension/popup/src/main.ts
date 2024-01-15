import { abilitiesPlugin, Can } from '@casl/vue';
import { config } from '@fortawesome/fontawesome-svg-core';
import { createApp } from 'vue';
import { createPinia, PiniaPlugin } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import { createORM } from 'pinia-orm';
import { io } from 'socket.io-client';
import api from '@license-portal/frontend-libs/api';
import { ability } from '@license-portal/frontend-libs/casl';
import router from '@license-portal/frontend-libs/router';
import { useAuthStore } from '@license-portal/frontend-libs/stores';
import App from './App.vue';
import './assets/app.css';
import '@license-portal/frontend-libs/interceptors';
import 'vue-select/dist/vue-select.css';

// Gets rid of the default font-awesome css styles
config.autoAddCss = false;

const app = createApp(App);
const pinia = createPinia()
    .use(piniaPluginPersistedState)
    .use(createORM() as PiniaPlugin);
app.config.globalProperties.$api = api;

app.use(pinia);
app.use(router);
app.use(abilitiesPlugin, ability);
app.component(Can.name, Can);
const vueApp = app.mount('#app');

//* Vue WarnHandler for router-view triggerFetch
app.config.warnHandler = (msg, _vm, trace) => {
    if (msg.includes('Extraneous non-emits event listeners (trigger')) {
        return;
    }
    console.warn(msg, trace);
};

// needed so that Cypress tests can access them from window
(window as any).vueApp = vueApp;
(window as any).vueRouter = router;
(window as any).vueAbility = ability;
(window as any).authStore = useAuthStore();
(window as any).io = io;
