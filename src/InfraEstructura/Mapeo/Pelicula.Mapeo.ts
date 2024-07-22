import { Peliculas, PeliculaCompleta } from '../../Core/Modelos/Peliculas-Modelos';
import type { MovieDBPelicula, Result } from "../Interfaces/Pelicula-Db-Respuesta.interfaces";

export class PeliculasMapeo{
    static PeliculaResultado( resultado: Result) : Peliculas{
        return{
            id: resultado.id,
            titulo: resultado.title,
            descripcion: resultado.overview,
            fechaLanzamiento: new Date(resultado.release_date),
            clasificacion: resultado.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${ resultado.poster_path }`,
            fondo: `https://image.tmdb.org/t/p/w500${ resultado.backdrop_path }`


        }

    }
    static PeliculaCompletaResultado( movieDb: MovieDBPelicula) : PeliculaCompleta{
        return{
            id: movieDb.id,
            titulo: movieDb.title,
            descripcion: movieDb.overview,
            fechaLanzamiento: new Date(movieDb.release_date),
            clasificacion: movieDb.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${ movieDb.poster_path }`,
            fondo: `https://image.tmdb.org/t/p/w500${ movieDb.backdrop_path }`,
            genero: movieDb.genres.map(genero => genero.name ),
            companiaProdujo: movieDb.production_companies.map(compania => compania.name),
            presupuesto: movieDb.budget,
            duracion: movieDb.runtime,
            tituloOriginal: movieDb.original_title,



        }

    }
}