import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { UsePeliculashook } from '../../Hooks/UsePeliculas.hook'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PosterCarousel } from '../../Componentes/Peliculas/Poster-Carousel'
import { HorizontalCarousel } from '../../Componentes/Peliculas/Horizontal-Carousel'
import { CargandoPantallaCompleta } from '../../Componentes/Cargando/Cargando-Pantalla-Completa'

export const InicioPantalla = () => {
  //Para saber Area Segura
  const  {top} =useSafeAreaInsets()
  const {cargando,carteleras, Popular,masValorada,Proximamente, SiguientePaginasPeliculasPopulares} = UsePeliculashook()
  if(cargando)
  {
    return(<CargandoPantallaCompleta/>)
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/*Principal*/}
        <PosterCarousel peliculas={carteleras} />
        {/*Popular*/}
        <HorizontalCarousel
          peliculas={Popular}
          titulo="Popular"
          CargarSiguientePagina={() => SiguientePaginasPeliculasPopulares()}
        />
        {/*Mas Valoradas*/}
        <HorizontalCarousel peliculas={masValorada} titulo="Mas Valorada" />
        {/*Proximamente*/}
        <HorizontalCarousel peliculas={Proximamente} titulo="Proximamente" />
      </View>
    </ScrollView>
  );
}
