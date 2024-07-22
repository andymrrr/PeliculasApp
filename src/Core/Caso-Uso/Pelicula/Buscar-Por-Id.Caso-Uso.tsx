import { HttpAdaptador } from '../../../Config/Adaptadores/Http/Http-Adaptador';
import { MovieDBPelicula } from '../../../InfraEstructura/Interfaces/Pelicula-Db-Respuesta.interfaces';
import { PeliculasMapeo } from '../../../InfraEstructura/Mapeo/Pelicula.Mapeo';
import { PeliculaCompleta } from '../../Modelos/Peliculas-Modelos';

export const BuscarPorIdCasoUso =  async ( adaptador:HttpAdaptador,idPelicula:number) : Promise<PeliculaCompleta> => {
    try {
        const pelicula = await adaptador.Buscar<MovieDBPelicula>(`/${idPelicula}`);
        const PeliculaMapeada = PeliculasMapeo.PeliculaCompletaResultado(pelicula)   
        return PeliculaMapeada;
    } catch (error) {
        console.log(error)
        throw new Error("Error Buscando las peliculas en Carteleras")
    }
}