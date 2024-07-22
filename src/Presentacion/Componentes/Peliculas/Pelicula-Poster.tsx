import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Peliculas} from '../../../Core/Modelos/Peliculas-Modelos';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PeliculaStackParametro} from '../../Navegacion/Stack-Navegacion';
interface Propiedad {
  pelicula: Peliculas;
  altura?: number;
  ancho?: number;
}
export const PeliculaPoster = ({
  ancho = 300,
  altura = 420,
  pelicula,
}: Propiedad) => {
  const navegar = useNavigation<NavigationProp<PeliculaStackParametro>>();
  return (
    <Pressable
      style={({pressed}) => ({
        width: ancho,
        height: altura,
        marginHorizontal:3,
        paddingBottom:20,
        paddingHorizontal: 7,
        opacity: pressed ? 0.9 : 1,

      })}
      onPress={() => navegar.navigate('Detalles', {idPelicula: pelicula.id})}>
      <View style={{...Estilo.imagenContenedor}}>
        <Image source={{uri: pelicula.poster}} style={Estilo.imagen} />
      </View>
    </Pressable>
  );
};

const Estilo = StyleSheet.create({
  imagenContenedor: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  imagen: {
    flex: 1,
    borderRadius: 18,
  },
});
