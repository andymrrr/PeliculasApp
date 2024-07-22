import React, { useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { Peliculas } from '../../../Core/Modelos/Peliculas-Modelos'
import { PeliculaPoster } from './Pelicula-Poster'
interface Propiedad{
    peliculas: Peliculas[]
    titulo?:string;
    CargarSiguientePagina?: ()=>void
}
export const HorizontalCarousel = ({peliculas,titulo,CargarSiguientePagina}: Propiedad) => {
    const cargando = useRef(false)
    useEffect(() => {
     setTimeout(() => {
        cargando.current = false
     }, 3000);
    }, [peliculas])
    
 const onScroll = (evento: NativeSyntheticEvent<NativeScrollEvent>) =>{
    if(cargando.current)
    {
        return;
    }
    const {contentOffset,layoutMeasurement,contentSize} = evento.nativeEvent;
    const esElFinal =  (contentOffset.x + layoutMeasurement.width + 600)>=  contentSize.width 

    if(!esElFinal)
    {
        return;
    }
    cargando.current = true;
    //Cargar la paginas siguientes
    CargarSiguientePagina && CargarSiguientePagina();
    
 }
  return (
   <View style={{height: titulo? 260 : 220}}>
    {
        titulo && (
            <Text style={{fontSize:30, fontWeight:"300", marginLeft:10, marginBottom:10}}>{titulo}</Text>
        )
    }

    <FlatList
        data={peliculas}
        renderItem={({item})=> (
            <PeliculaPoster pelicula={item} ancho={140} altura={200}/>
        )}
        keyExtractor={(item,index)=> `${item.id} - ${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={(evento) => onScroll(evento)}
    />
   </View>
  )
}
