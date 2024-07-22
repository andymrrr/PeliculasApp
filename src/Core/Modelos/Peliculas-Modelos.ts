export interface Peliculas {
    id: number;
    titulo: string;
    descripcion: string;
    fechaLanzamiento: Date;
    clasificacion: number;
    poster: string;
    fondo: string;
}

export interface PeliculaCompleta extends Peliculas{
    genero: string[];
    duracion: number;
    presupuesto: number;
    tituloOriginal: string;
    companiaProdujo: string[] 
}