import { HttpAdaptador } from "../../../Config/Adaptadores/Http/Http-Adaptador";
import { MovieDBPeliculasActores } from "../../../InfraEstructura/Interfaces/Pelicula-Db-Respuesta.interfaces";
import { ActoresMapeo } from "../../../InfraEstructura/Mapeo/Actores.Mapeo";
import { Actores } from "../../Modelos/Actor-Modelos";

export const BuscarActoresCasoUso = async ( adaptador:HttpAdaptador,idPelicula:number) : Promise<Actores[]> => {
    try {
        const {cast} = await adaptador.Buscar<MovieDBPeliculasActores>(`/${idPelicula}/credits`);
        const ActoresMapeado = cast.map(actor => ActoresMapeo.MapearActores(actor))   
        return ActoresMapeado;
    } catch (error) {
        console.log(error)
        throw new Error("Error Buscando las peliculas -Actores Pelicula")
    }
}
