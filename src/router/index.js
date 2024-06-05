import {createRouter, createWebHistory} from "vue-router";
import HomeMechanic from "../profile-management/component/mechanic/mechanic-home.component.vue";
import MechanicProfile from "../profile-management/component/mechanic/mechanic-profile.component.vue";
import MechanicWallet from "../suscriptions-and-payments/pages/mechanic/mechanic-wallet.component.vue";
import MechanicHistory from "../profile-management/component/mechanic/mechanic-history.component.vue";

import OwnerHome from "../profile-management/component/owner/owner-home.component.vue";
import OwnerWallet from "../suscriptions-and-payments/pages/owner/owner-wallet.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: HomeMechanic},
        {path: '/profile', component: MechanicProfile},
        {path: '/wallet', component: MechanicWallet},
        {path: '/history', component: MechanicHistory},
        {path: '/', redirect: '/home'},
        {path: '/owner/home', component: OwnerHome},
        {path: '/owner/wallet', component: OwnerWallet},

    ]
});


export default router;





















