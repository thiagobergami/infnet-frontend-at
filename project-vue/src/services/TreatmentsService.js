
import axios from "axios";
import http from "../http-common"

class TreatmentsService{
    listar(){
        return http.get();
    }
}

export default new TreatmentsService();