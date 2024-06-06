import {createRouter, createWebHistory} from "vue-router";
import MechanicHome from "../dashboard-and-analytics/pages/mechanic/mechanic-home.component.vue";
import MechanicWallet from "../suscriptions-and-payments/pages/mechanic/mechanic-wallet.component.vue";
import MechanicHistory from "../profile-management/component/mechanic/mechanic-history.component.vue";
import MechanicProfileComponent from "../profile-management/component/mechanic/mechanic-profile.component.vue";

import OwnerHome from "../profile-management/component/owner/owner-home.component.vue";
import OwnerVehicle from "../service-execution-and-monitor/pages/owner/owner-vehicle.component.vue";
import OwnerWallet from "../suscriptions-and-payments/pages/owner/owner-wallet.component.vue";
import OwnerProfile from "../profile-management/component/owner/owner-profile.component.vue";

import ClientHomeComponent from "../dashboard-and-analytics/pages/client/client-home.component.vue";
import ClientServiceHistoryComponent from "../profile-management/component/client/client-service-history.component.vue";
import rentServiceComponent from "../service-execution-and-monitor/pages/client/rent-service.component.vue";
import ClientProfile from "../profile-management/component/client/client-profile.component.vue";
import Sign from"../profile-management/pages/mechanic/view-sign.component.vue";
import Home from "../public/pages/profile/view-general.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/mechanic/home', component: MechanicHome},
        {path: '/mechanic/wallet', component: MechanicWallet},
        {path: '/mechanic/history', component: MechanicHistory},
        {path: '/mechanic/profile', component: MechanicProfileComponent},
        {path: '/sign', component: Sign},

        {path: '/owner/home', component: OwnerHome},
        {path: '/owner/wallet', component: OwnerWallet},
        {path: '/owner/vehicle', component: OwnerVehicle},
        {path: '/owner/history', component: MechanicHistory},
        {path: '/owner/profile', component: OwnerProfile},

        {path: '/client/home', component: ClientHomeComponent},
        {path: '/client/history', component: ClientServiceHistoryComponent},
        {path: '/client/service', component: rentServiceComponent},
        {path: '/client/plans', component: MechanicHistory},
        {path: '/client/profile', component: ClientProfile},
        {path: '/home', component: Home },

        {path: '/', redirect: '/home'},


    ]
});


export default router;





















