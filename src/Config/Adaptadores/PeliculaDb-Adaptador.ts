import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdaptador } from "./Http/Axios.Adaptador";

export const PeliculaDbAdaptador = new AxiosAdaptador({
    baseUrl:`https://api.themoviedb.org/3/movie`,
    parametros:{
        api_key: THE_MOVIE_DB_KEY,
        language: "es"

    }
})
