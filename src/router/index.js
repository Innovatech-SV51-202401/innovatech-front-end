import {createRouter, createWebHistory} from "vue-router";
import HomeOwnerComponent from "../public/pages/owner/home-owner.component.vue";
import ReservationOwnerComponent from "../glidego/components/owner/reservation-owner.component.vue";
import MaintenanceOwnerComponent from "../glidego/components/owner/maintenance-owner.component.vue";
import WalletOwnerComponent from "../glidego/components/owner/wallet-owner.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home-owner', component: HomeOwnerComponent},
        {path: '/reservation-owner', component: ReservationOwnerComponent},
        {path: '/maintenance-owner', component: MaintenanceOwnerComponent},
        {path: '/wallet-owner', component: WalletOwnerComponent},
        {path: '/', redirect: '/home-owner'}
    ]
})

export default router;