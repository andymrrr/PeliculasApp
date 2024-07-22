import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView} from 'react-native';
import {PeliculaStackParametro} from '../../Navegacion/Stack-Navegacion';
import {UsePeliculahook} from '../../Hooks/UsePelicula.hook';
import {PeliculaCabecera} from '../../Componentes/Pelicula/Pelicula-Cabecera';
import {PeliculaDetalle} from '../../Componentes/Pelicula/Pelicula-Detalle';
import {CargandoPantallaCompleta} from '../../Componentes/Cargando/Cargando-Pantalla-Completa';
interface Propiedad
  extends StackScreenProps<PeliculaStackParametro, 'Detalles'> {}
export const DetallesPantalla = ({navigation, route}: Propiedad) => {
  const {idPelicula} = route.params;
  const {cargando, pelicula, actor} = UsePeliculahook(idPelicula);
  if (cargando) {
    return <CargandoPantallaCompleta />;
  }

  return (
    <ScrollView>
      {/*Cabecera */}
      <PeliculaCabecera
        titulo={pelicula!.titulo}
        tituloOriginal={pelicula!.tituloOriginal}
        poster={pelicula!.poster}
      />
      {/*Detalle */}
      <PeliculaDetalle pelicula={pelicula!} actores={actor} />
    </ScrollView>
  );
};
