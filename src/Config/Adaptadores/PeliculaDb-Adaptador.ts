import { AxiosAdaptador } from "./Http/Axios.Adaptador";

export const PeliculaDbAdaptador = new AxiosAdaptador({
    baseUrl:`https://api.themoviedb.org/3/movie`,
    parametros:{
        api_key:"80cc9b8aa8d3acd0a024e0461a05cec2",
        language: "es"

    }
})
