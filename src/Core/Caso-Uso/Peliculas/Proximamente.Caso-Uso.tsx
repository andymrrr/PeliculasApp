import { HttpAdaptador } from "../../../Config/Adaptadores/Http/Http-Adaptador";
import { MovieDbRespuesta } from "../../../InfraEstructura/Interfaces/Pelicula-Db-Respuesta.interfaces";
import { PeliculasMapeo } from "../../../InfraEstructura/Mapeo/Pelicula.Mapeo";
import { Peliculas } from "../../Modelos/Peliculas-Modelos";

export const PeliculaProximamenteCasoUso = async ( adaptador:HttpAdaptador) : Promise<Peliculas[]> => {
    try {
        const MovieDbProximamente = await adaptador.Buscar<MovieDbRespuesta>('/upcoming');
        
        const MovieDbProximamenteMapeada = MovieDbProximamente.results.map(resultado=> PeliculasMapeo.PeliculaResultado(resultado))

        
        return MovieDbProximamenteMapeada;
    } catch (error) {
        console.log(error)
        throw new Error("Error Buscando las peliculas en PeliculaProximamenteCasoUso")
    }
}
