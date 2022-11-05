import axios from "axios";

export default axios.create({
    baseURL: "localhost:3333",
    headers: {
        "Content-type": "application/json"
    }
});