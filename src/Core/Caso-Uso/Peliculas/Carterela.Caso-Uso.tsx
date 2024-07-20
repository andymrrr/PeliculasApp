import { HttpAdaptador } from "../../../Config/Adaptadores/Http/Http-Adaptador";

export const PeliculasCarterelaCasoUso = async ( adaptador:HttpAdaptador) => {
    try {
        const Carterela = await adaptador.Buscar('/now_playing');
        console.log(Carterela)
        return []
    } catch (error) {
        
    }
}
