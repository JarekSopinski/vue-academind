import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

// Components registered here are available globally
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
