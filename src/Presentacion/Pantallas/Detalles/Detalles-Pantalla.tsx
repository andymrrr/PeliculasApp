import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {PeliculaStackParametro} from '../../Navegacion/Stack-Navegacion';
import {UsePeliculahook} from '../../Hooks/UsePelicula.hook';
import {PeliculaCabecera} from '../../Componentes/Pelicula/Pelicula-Cabecera';
import { PeliculaDetalle } from '../../Componentes/Pelicula/Pelicula-Detalle';
interface Propiedad
  extends StackScreenProps<PeliculaStackParametro, 'Detalles'> {}
export const DetallesPantalla = ({navigation, route}: Propiedad) => {
  const {idPelicula} = route.params;
  const {cargando, pelicula} = UsePeliculahook(idPelicula);
  if (cargando) {
    return <Text>Cargando</Text>;
  }

  return (
    <View>
      {/*Cabecera */}
      <PeliculaCabecera
        titulo={pelicula!.titulo}
        tituloOriginal={pelicula!.tituloOriginal}
        poster={pelicula!.poster}
      />
      {/*Detalle */}
      <PeliculaDetalle pelicula={pelicula!} />
    </View>
  );
};
