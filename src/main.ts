import { createApp } from 'vue';
import App from './App';
import router from './router';
import NutUIWrap from '@/components/componentList/index';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/style.css';
import ABC from '@/components/layouts/ABC';

createApp(App).use(NutUI).use(NutUIWrap).use(router).component('ABC', ABC).mount('#app');
