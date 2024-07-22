import { HttpAdaptador } from "../../../Config/Adaptadores/Http/Http-Adaptador";
import { MovieDbRespuesta } from "../../../InfraEstructura/Interfaces/Pelicula-Db-Respuesta.interfaces";
import { PeliculasMapeo } from "../../../InfraEstructura/Mapeo/Pelicula.Mapeo";
import { Peliculas } from "../../Modelos/Peliculas-Modelos";

export const PeliculaMasValoradaCasoUso = async ( adaptador:HttpAdaptador) : Promise<Peliculas[]> => {
    try {
        const MovieDbMasValorada = await adaptador.Buscar<MovieDbRespuesta>('/top_rated');
        
        const MovieDbMasValoradaMapeada = MovieDbMasValorada.results.map(resultado=> PeliculasMapeo.PeliculaResultado(resultado))

        
        return MovieDbMasValoradaMapeada;
    } catch (error) {
        console.log(error)
        throw new Error("Error Buscando las peliculas en PeliculaMasValoradaCasoUso")
    }
}
