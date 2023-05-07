import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c3da1c0c2f844fb9bc4750b8d04f8847"

    }
})