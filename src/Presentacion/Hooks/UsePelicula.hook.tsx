import { useEffect, useState } from "react";
import * as CasoUso from '../../Core/Caso-Uso'
import { PeliculaDbAdaptador } from "../../Config/Adaptadores/PeliculaDb-Adaptador";
import { PeliculaCompleta } from "../../Core/Modelos/Peliculas-Modelos";


export const UsePeliculahook = (idPelicula: number) => {
  const [cargando, setCargando] = useState(true)
  const [pelicula, setPelicula] = useState<PeliculaCompleta>()

  useEffect(() => {
   BuscarPelicula()
  }, [idPelicula])
  
  const BuscarPelicula =async()=>{
    setCargando(true)
    const PeliculaCompleta = await CasoUso.BuscarPorIdCasoUso(PeliculaDbAdaptador,idPelicula);
    setPelicula(PeliculaCompleta)
    setCargando(false)
  }
    return {
     cargando,
     pelicula
      
    };
}
