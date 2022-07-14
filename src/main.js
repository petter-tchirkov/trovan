
import { createApp } from 'vue'
import './style.scss'
import 'tw-elements';
import App from './App.vue'
import router from './router'
import store from './store'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


createApp(App).component('Datepicker', Datepicker).use(router).use(store).mount('#app')
