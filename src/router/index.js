import {createRouter, createWebHistory} from "vue-router";

import MechanicHome from "../public/pages/mechanic/mechanic-view.component.vue";

import MechanicProfile from "../profile-management/component/mechanic/mechanic-profile.component.vue";
import MechanicWallet from "../profile-management/component/mechanic/mechanic-wallet.component.vue";
import MechanicHistory from "../profile-management/component/mechanic/mechanic-history.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: MechanicHome},
        {path: '/profile', component: MechanicProfile},
        {path: '/wallet', component: MechanicWallet},
        {path: '/history', component: MechanicHistory},
        {path: '/', redirect: '/profile'},
    ]
});

export default router;