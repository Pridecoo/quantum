import { createApp } from 'vue';
import App from './App.vue';

import BaseButton from './components/ui/BaseButton';
import BaseStep from './components/ui/BaseStep';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-step', BaseStep);
app.mount('#app');
