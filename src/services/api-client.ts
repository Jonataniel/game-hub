import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1c58ee3f5e744d599bb1268c71571a31"
    }
})