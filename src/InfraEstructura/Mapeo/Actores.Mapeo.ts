import {Actores} from '../../Core/Modelos/Actor-Modelos';
import {Cast} from '../Interfaces/Pelicula-Db-Respuesta.interfaces';

export class ActoresMapeo {
  static MapearActores(movieDb: Cast): Actores {
    return {
      id: movieDb.id,
      nombre: movieDb.name,
      personaje: movieDb.character ?? 'No tiene Personaje',
      avatar: movieDb.profile_path
        ? `https://image.tmdb.org/t/p/w500${movieDb.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
