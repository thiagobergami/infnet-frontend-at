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
        selectedTreatment : null
    },
    actions: {
        async listar({ commit }) {
            const response = await TreatmentsService.listar()
            commit("listar", response.data);
        }
    },
    getters:{
        treatments: state => state.treaments,
        treatment: state => state.selectedTreatment
    },  
    mutations:{
        listar: (state, treatments) => (state.treatments = treatments)
    }
});

app.use(router)
app.use(store)

app.mount('#app')
