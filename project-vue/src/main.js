import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import TreatmentsService from './services/TreatmentsService'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)

const store = createStore({
    state: {
        treatments: [],
        treatment: null
    },
    actions: {
        async listar({ commit }) {
            const response = await TreatmentsService.listar()
            commit("listar", response);
        },
        async adicionar({ commit }, treatment) {
            try {
                const response = await TreatmentsService.adicionar(treatment)
                commit("adicionar", response)
                return true
            } catch (error) {
                return false
            }
        },
        async verifiacarUnico(treatment) {
            const response = await TreatmentsService.adicionar(treatment)
            return response;
        },
        async buscar({commit}, id){
            const response = await TreatmentsService.buscar(id)
            commit("buscar", response)
        }
    },
    getters: {
        treatments: state => state.treatments,
        treatment: state => state.treatment
    },
    mutations: {
        listar: (state, treatments) => {
            (state.treatments = treatments)
        },
        adicionar: (state, treatment) => state.treatments.push(treatment),
        buscar: (state, treatment) => (state.treatment = treatment),
    }
});

app.use(router)
app.use(store)

app.mount('#app')
