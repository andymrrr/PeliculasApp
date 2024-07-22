import { HttpAdaptador } from "../../../Config/Adaptadores/Http/Http-Adaptador";
import { MovieDbRespuesta } from "../../../InfraEstructura/Interfaces/Pelicula-Db-Respuesta.interfaces";
import { PeliculasMapeo } from "../../../InfraEstructura/Mapeo/Pelicula.Mapeo";
import { Peliculas } from "../../Modelos/Peliculas-Modelos";
interface Opciones{
    pagina?: number;
    limite?: number; 
}
export const PeliculasPopularCasoUso = async ( adaptador:HttpAdaptador, opciones?: Opciones) : Promise<Peliculas[]> => {
    try {
        const MovieDbPopular = await adaptador.Buscar<MovieDbRespuesta>('/popular',{
            params:{
                page: opciones?.pagina ??  1
            }
        });
        
        const MovieDbPopularMapeada = MovieDbPopular.results.map(resultado=> PeliculasMapeo.PeliculaResultado(resultado))

        
        return MovieDbPopularMapeada;
    } catch (error) {
        console.log(error)
        throw new Error("Error Buscando las peliculas en popular")
    }
}
