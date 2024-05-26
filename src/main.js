import { createApp } from 'vue'
import App from './app.vue';

import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css'
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import SelectButton from "primevue/selectbutton";
import Menubar from "primevue/menubar";
import Image from "primevue/image";
import router from "./router/index.js";


const app = createApp(App);

app.use(PrimeVue,{ripple: true})
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('Menubar',Menubar)
    .component('Image', Image)
    .component('pv-toast', Toast)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-sidebar', Sidebar)
    .component('pv-select-button', SelectButton)
    .use(router)
    .mount('#app')
