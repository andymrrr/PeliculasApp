import  { useEffect, useState } from 'react'
import { Peliculas } from '../../Core/Modelos/Peliculas-Modelos'
import * as CasoDeUso from '../../Core/Caso-Uso'
import { PeliculaDbAdaptador } from '../../Config/Adaptadores/PeliculaDb-Adaptador'

export const UsePeliculashook = () => {
  let paginaPeliculaPopulares = 1;
  const [carteleras, setCarteleras] = useState<Peliculas[]>([])
  const [Popular, setPopular] = useState<Peliculas[]>([])
  const [masValorada, setMasValorada] = useState<Peliculas[]>([])
  const [Proximamente, setProximamente] = useState<Peliculas[]>([])
  const [cargando, setCargando] = useState(true)
    useEffect(() => {
      cargaInicial()
      
    }, [])
    
  const cargaInicial = async() =>{
    const CarteleraPromesa =  CasoDeUso.PeliculasCarterelaCasoUso(PeliculaDbAdaptador);
    const ProximamentePromesa=  CasoDeUso.PeliculaProximamenteCasoUso(PeliculaDbAdaptador);
    const MasValoradaPromesa =  CasoDeUso.PeliculaMasValoradaCasoUso(PeliculaDbAdaptador);
    const PopularesPromesa =  CasoDeUso.PeliculasPopularCasoUso(PeliculaDbAdaptador);

    const [
      CarteleraPeliculas,
      ProximamentePeliculas,
      MasValoradaPeliculas,
      PopularesPeliculas,
    ] = await Promise.all([
      CarteleraPromesa,
      ProximamentePromesa,
      MasValoradaPromesa,
      PopularesPromesa,
    ]);


    setCarteleras(CarteleraPeliculas)
    setProximamente(ProximamentePeliculas)
    setMasValorada(MasValoradaPeliculas)
    setPopular(PopularesPeliculas)
    setCargando(false)
  }
  const SiguientePaginasPeliculasPopulares = async() => {
    paginaPeliculaPopulares++
    const peliculasPopulares = await CasoDeUso.PeliculasPopularCasoUso(PeliculaDbAdaptador,{
      pagina: paginaPeliculaPopulares
    })

    setPopular(prev => [...prev, ...peliculasPopulares])
  }
    return {
      cargando,
      carteleras,
      Proximamente,
      masValorada,
      Popular,

      SiguientePaginasPeliculasPopulares
      
    };
}
