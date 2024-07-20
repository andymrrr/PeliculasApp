import { createStackNavigator } from '@react-navigation/stack';
import { InicioPantalla } from '../Pantallas/Inicio/Inicio-Pantalla';
import { DetallesPantalla } from '../Pantallas/Detalles/Detalles-Pantalla';

export type PeliculaStackParametro ={
    inicio: undefined,
    Detalles: {idPelicula: number}
}

const Stack = createStackNavigator<PeliculaStackParametro>();

export const StackNavegacion =() => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="inicio" component={InicioPantalla} />
      <Stack.Screen name="Detalles" component={DetallesPantalla} />
      
    </Stack.Navigator>
  );
}