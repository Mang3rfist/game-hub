import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "b844a343b8bd42e69e2e4c02294cfd37"

    }
})