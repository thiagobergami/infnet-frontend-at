
import axios from "axios";

class TreatmentsService {
    async listar() {
        const response = await axios.get("http://localhost:3000/treatments");
        return response.data
    }
    async adicionar(treatment) {
        const response = await axios.post(
            "http://localhost:3000/treatments",
            treatment
        );
        return response.data
    }
    async buscar(id) {
        const response = await axios.get(
            `http://localhost:3000/treatments/${id}`
        )
        return response.data
    }
    async editar(treatment){
        const response = await axios.put(
            "http://localhost:3000/treatments",
            treatment
        );
        return response.data
    }
    async deletar(id) {
        await axios.delete(
            `http://localhost:3000/treatments/${id}`
        )
        return
    }
}

export default new TreatmentsService();