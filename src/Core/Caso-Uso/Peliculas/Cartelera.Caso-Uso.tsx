import { HttpAdaptador } from "../../../Config/Adaptadores/Http/Http-Adaptador";
import { MovieDbCarteleraRespuesta } from "../../../InfraEstructura/Interfaces/Pelicula-Db-Respuesta.interfaces";
import { PeliculasMapeo } from "../../../InfraEstructura/Mapeo/Pelicula.Mapeo";
import { Peliculas } from "../../Modelos/Peliculas-Modelos";

export const PeliculasCarterelaCasoUso = async ( adaptador:HttpAdaptador) : Promise<Peliculas[]> => {
    try {
        const MovieDbCartelera = await adaptador.Buscar<MovieDbCarteleraRespuesta>('/now_playing');
        
        const MovieDbCarteleraMapeada = MovieDbCartelera.results.map(resultado=> PeliculasMapeo.PeliculaResultado(resultado))

        
        return MovieDbCarteleraMapeada;
    } catch (error) {
        console.log(error)
        throw new Error("Error Buscando las peliculas en Carteleras")
    }
}
