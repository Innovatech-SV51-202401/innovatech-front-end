import {createRouter, createWebHistory} from "vue-router";

import HomeMechanic from "../profile-management/component/mechanic/mechanic-home.component.vue";

import MechanicProfile from "../profile-management/component/mechanic/mechanic-profile.component.vue";
import MechanicWallet from "../profile-management/component/mechanic/mechanic-wallet.component.vue";
import MechanicHistory from "../profile-management/component/mechanic/mechanic-history.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: HomeMechanic},
        {path: '/profile', component: MechanicProfile},
        {path: '/wallet', component: MechanicWallet},
        {path: '/history', component: MechanicHistory},
        {path: '/', redirect: '/home'}
    ]
});

export default router;