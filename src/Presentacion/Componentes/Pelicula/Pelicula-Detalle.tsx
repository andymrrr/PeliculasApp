import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PeliculaCompleta } from '../../../Core/Modelos/Peliculas-Modelos'
import { Formato } from '../../../Config/Utilitario/Formato'
import { Actores } from '../../../Core/Modelos/Actor-Modelos';
import { PeliculaActor } from './Pelicula-Actor';
interface Propiedad{
    pelicula: PeliculaCompleta;
    actores: Actores[]

}
export const PeliculaDetalle = ({pelicula, actores}:Propiedad) => {
  return (
    <>
        <View style={{marginHorizontal:20}}>
            <View style={{flexDirection:"row"}}>
                <Text>{pelicula.clasificacion}</Text>
                <Text style={{marginLeft:5}}> - {pelicula.genero.join(", ")}</Text>
            </View>
            <Text style={Estilo.Titulo}>
                Historia
            </Text>
            <Text style={{fontSize:16}}>{pelicula.descripcion}</Text>
            <Text style={Estilo.Titulo}>Presupuesto: </Text>
            <Text style={{fontSize:18}}>{Formato.Divisa(pelicula.presupuesto)}</Text>
        </View>
        {/*Actores */}
        <View style={{marginTop:10, marginBottom:100}}>
            <View style={{...Estilo.Titulo, marginHorizontal:20}}></View>
            <FlatList
                data={actores}
                keyExtractor={(item,index) => `${item.id} - ${index}` }
                renderItem={({item}) => (<PeliculaActor actor={item} />) }
                horizontal
                showsHorizontalScrollIndicator={false}
            />
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
