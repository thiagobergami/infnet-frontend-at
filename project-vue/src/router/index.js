import { createRouter, createWebHistory } from "vue-router"

import ListTreatment from "../components/ListTreatment.vue";
import AddTreatment from "../components/AddTreatment.vue";
import EditTreatment from "../components/EditTreatment.vue";

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
            path: "/adicionar",
            alias: "/adicionar",
            name: "adicionar",
            component: () => AddTreatment
        },
        {
            path: "/treatment/:id",
            name: "editar",
            component: () => EditTreatment
        }
    ]
})

export default router