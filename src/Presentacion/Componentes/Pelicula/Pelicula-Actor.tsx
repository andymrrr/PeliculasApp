import React from 'react'
import { Actores } from '../../../Core/Modelos/Actor-Modelos'
import { Image, StyleSheet, Text, View } from 'react-native'
interface Propiedad {
    actor: Actores
}
export const PeliculaActor = ({actor}: Propiedad) => {
  return (
    <View style={Estilo.contenedor}>
        <Image
            style={Estilo.imagen}
            source={{uri: actor.avatar}}
        />
        <View style={Estilo.informacionActor}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>
                {actor.nombre}
            </Text>
            <Text style={{fontSize:12, opacity:0.7}}>
                {actor.personaje}
            </Text>
        </View>
    </View>
  )
}


const Estilo = StyleSheet.create({
    contenedor:{
        marginRight:10,
        paddingLeft:10,
        display:"flex",
        flexDirection:"column",
        width:100
    },
    informacionActor: {
        marginLeft:10,
        marginTop:4
    },
    imagen:{
        width:100,
        height:150,
        borderRadius:10
    }
})