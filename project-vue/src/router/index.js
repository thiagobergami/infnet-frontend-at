import { createRouter, createWebHistory } from "vue-router"

import ListTreatment from "../components/ListTreatment.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/treatments",
            name: "treatments",
            component: () => ListTreatment
        }
    ]
})

export default router