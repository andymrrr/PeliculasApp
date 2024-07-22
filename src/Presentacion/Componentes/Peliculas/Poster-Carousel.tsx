import React from 'react'
import { Text, View } from 'react-native'
import { Peliculas } from '../../../Core/Modelos/Peliculas-Modelos'
import { ScrollView } from 'react-native-gesture-handler';
import { PeliculaPoster } from './Pelicula-Poster';
interface Propiedad{
  peliculas: Peliculas[];
  altura?: number;
}
export const PosterCarousel = ({altura=440, peliculas}:Propiedad) => {
  return (
    <View style={{height: altura}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            peliculas.map(pelicula => (<PeliculaPoster pelicula={pelicula} key={pelicula.id} />))
          }
        </ScrollView>
    </View>
  )
}
