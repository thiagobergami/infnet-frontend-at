import TreatmentsService from "../services/TreatmentsService";

const state = {
    treatments: []
}

const getters = {
    treatments: state => state.treatments
}

const actions ={
    async listar({commit}) {
        const response = await TreatmentsService.listar();

        commit("setTreatments", response.data)
    }
};

const mutations = {
    setTreatments: (state, treatments) => (state.treatments = treatments)
}

export default {
    state,
    getters,
    actions,
    mutations
}