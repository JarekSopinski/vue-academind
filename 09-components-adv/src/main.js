import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

// Components registered here are available globally
app.component('base-badge', BaseBadge);

app.mount('#app');
