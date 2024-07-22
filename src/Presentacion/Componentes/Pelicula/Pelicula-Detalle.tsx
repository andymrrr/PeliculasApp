import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PeliculaCompleta } from '../../../Core/Modelos/Peliculas-Modelos'
interface Propiedad{
    pelicula: PeliculaCompleta

}
export const PeliculaDetalle = ({pelicula}:Propiedad) => {
  return (
    <>
        <View style={{marginHorizontal:20}}>
            <View style={{flexDirection:"row"}}>
                <Text>{pelicula.clasificacion}</Text>
                <Text style={{marginLeft:5}}> - {pelicula.genero.join(", ")}</Text>
            </View>
            <View style={Estilo.Titulo}>
                Historia
            </View>
        </View>
    </>
  )
}

const Estilo = StyleSheet.create({
    Titulo:{
        marginTop:10,
        fontSize:23,
        fontWeight:"bold"
    }
})
