import {createRouter, createWebHistory} from "vue-router";
import MechanicHome from "../dashboard-and-analytics/pages/mechanic/mechanic-home.component.vue";
import MechanicWallet from "../suscriptions-and-payments/pages/mechanic/mechanic-wallet.component.vue";
import MechanicHistory from "../profile-management/component/mechanic/mechanic-history.component.vue";

import OwnerHome from "../profile-management/component/owner/owner-home.component.vue";
import OwnerVehicle from "../service-execution-and-monitor/pages/owner/owner-vehicle.component.vue";
import OwnerWallet from "../suscriptions-and-payments/pages/owner/owner-wallet.component.vue";
import MechanicProfileComponent from "../profile-management/component/mechanic/mechanic-profile.component.vue";

import ClientHomeComponent from "../dashboard-and-analytics/pages/client/client-home.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/mechanic/home', component: MechanicHome},
        {path: '/mechanic/wallet', component: MechanicWallet},
        {path: '/mechanic/history', component: MechanicHistory},
        {path: '/mechanic/profile', component: MechanicProfileComponent},

        {path: '/owner/home', component: OwnerHome},
        {path: '/owner/wallet', component: OwnerWallet},
        {path: '/owner/vehicle', component: OwnerVehicle},
        {path: '/owner/history', component: MechanicHistory},


        {path: '/client/home', component: ClientHomeComponent},
        {path: '/client/history', component: MechanicHistory},
        {path: '/client/service', component: MechanicHistory},
        {path: '/client/plans', component: MechanicHistory},
        {path: '/client/profile', component: MechanicHistory},

        {path: '/', redirect: '/home'},


    ]
});


export default router;





















