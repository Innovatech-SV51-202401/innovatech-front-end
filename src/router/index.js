import {createRouter, createWebHistory} from "vue-router";
import HomeMechanic from "../public/pages/mechanic/mechanic-view.component.vue";
import MechanicProfile from "../profile-management/component/mechanic/mechanic-profile.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: HomeMechanic},

        {path: '/home', redirect: '/home'},
    ]
});

export default router;