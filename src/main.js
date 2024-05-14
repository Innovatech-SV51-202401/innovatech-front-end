import { createApp } from 'vue'
import App from './app.vue';
import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css';


import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


import Menubar from "primevue/menubar";
import Image from "primevue/image";
import Card from "primevue/card";
import PrimeButton from 'primevue/button';


const app = createApp(App);

app.use(PrimeVue,{ripple: true})
    .component('Menubar',Menubar)
    .component('Image', Image)
    .component('pv-card', Card),
app.mount('#app');
