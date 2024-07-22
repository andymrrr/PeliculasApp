
import { ActivityIndicator, View } from 'react-native'

export  const  CargandoPantallaCompleta =()=> {
  return (
   <View style={{flex:1,justifyContent:"center"}}>
        <ActivityIndicator size={"large"} color={'indigo'} />
   </View>
  )
}
