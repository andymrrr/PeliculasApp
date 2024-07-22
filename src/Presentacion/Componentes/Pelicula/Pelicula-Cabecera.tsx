import React from 'react';
import {Image, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {PeliculaCompleta} from '../../../Core/Modelos/Peliculas-Modelos';
import {useNavigation} from '@react-navigation/native';
interface Propiedad {
    titulo: string;
    tituloOriginal:string;
    poster: string;
}
export const PeliculaCabecera = ({titulo,tituloOriginal,poster}: Propiedad) => {
  const {height: alturaPantalla} = useWindowDimensions();
  const navegacion = useNavigation();
  return (
    <>
      <View style={{...Estilo.ImagenContenedor, height: alturaPantalla * 0.7}}>
        <View style={Estilo.ImagenBorde}>
            <Image
                style={Estilo.ImagenPoster}
                source={{uri: poster}}
            />
        </View>

      </View>
      <View style={Estilo.MargenContenedor}>
        <Text style={Estilo.Titulo}>{tituloOriginal}</Text>
        <Text style={Estilo.SubTitulo}>{titulo}</Text>
      </View>

      <View 
      style={Estilo.BotonAtras}>
        <Pressable onPress={()=> navegacion.goBack()}>
            <Text style={Estilo.BotonAtrasTexto}>Regresar</Text>
        </Pressable>
      </View>
    </>
  );
};

const Estilo = StyleSheet.create({
  ImagenContenedor: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  ImagenBorde: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  ImagenPoster: {
    flex: 1,
  },

  MargenContenedor: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  SubTitulo: {
    fontSize: 16,
    opacity: 0.8,
  },
  Titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  BotonAtras: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 35,
    left: 10,
  },
  BotonAtrasTexto: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
