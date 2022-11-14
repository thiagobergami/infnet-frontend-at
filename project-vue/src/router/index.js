import { createRouter, createWebHistory } from "vue-router"

import ListTreatment from "../components/ListTreatment.vue";
import AddTreatment from "../components/AddTreatment.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            alias: "/treatments",
            name: "treatments",
            component: () => ListTreatment
        },
        {
            path: "/",
            alias: "/adicionar",
            name: "adicionar",
            component: () => AddTreatment
        }
    ]
})

export default router