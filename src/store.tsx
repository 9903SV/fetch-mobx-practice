import { makeAutoObservable } from "mobx";

class Store {
    state: {
        data: any,
        isLoading: boolean
    } = {
        data: {},
        isLoading: true
    }

    constructor() {
        makeAutoObservable(this)
    }

    getApiData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/752?api_key=1b2d30ef98a7d05a52a075002d77b253&language=en-US')
        const data = await response.json()

        this.state = {data: data, isLoading: false}
    }
}

export default new Store()