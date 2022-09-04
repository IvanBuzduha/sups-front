import axios from "../../node_modules/axios/index";


export default class HeroService {
    static async getAll(limit = 6, page = 1) {
        // const response = await axios.get('http://localhost:3000/', {
        const response = await axios.get('https://sups-bii.herokuapp.com/', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
}