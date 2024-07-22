import { useEffect, useState } from "react";
import * as CasoUso from '../../Core/Caso-Uso'
import { PeliculaDbAdaptador } from "../../Config/Adaptadores/PeliculaDb-Adaptador";
import { PeliculaCompleta } from "../../Core/Modelos/Peliculas-Modelos";
import { Actores } from "../../Core/Modelos/Actor-Modelos";


export const UsePeliculahook = (idPelicula: number) => {
  const [cargando, setCargando] = useState(true)
  const [pelicula, setPelicula] = useState<PeliculaCompleta>()
  const [actor, setActor] = useState<Actores[]>([])

  useEffect(() => {
   BuscarPelicula()
  }, [idPelicula])
  
  const BuscarPelicula =async()=>{
    setCargando(true)
    const PeliculaPromes = CasoUso.BuscarPorIdCasoUso(PeliculaDbAdaptador,idPelicula);
    const ActoresPromes = CasoUso.BuscarActoresCasoUso(PeliculaDbAdaptador,idPelicula)
    
    const [PeliculaCompleta, actores] = await Promise.all([PeliculaPromes,ActoresPromes])
    
    setPelicula(PeliculaCompleta)
    setActor(actores)
    setCargando(false)
  }
    return {
     cargando,
     pelicula,
     actor
      
    };
}
