import {createRouter, createWebHistory} from "vue-router";
import LoginComponen from "../iam/components/login.component.vue";
import RegisterUserComponent from "../iam/components/register-user.component.vue";
import RegisterSuccessfullyComponent from "../iam/components/register-successfully.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: LoginComponen},
        {path: '/register', component: RegisterUserComponent},
        {path: '/register/successfully', component: RegisterSuccessfullyComponent},
    ]
});

export default router;